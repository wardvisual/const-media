import crypto from "crypto";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

import User from "../models/User";
import sendEmail from "../utils/sendEmail";
import revokeToken from "../utils/revokeToken";
import RefreshToken from "../models/RefreshToken";
import ApiError from "../utils/ApiError";
import setAccessToken from "../utils/setAccessToken";
import setRefreshToken from "../utils/setRefreshToken";
import { ACCESS_TOKEN, REFRESH_TOKEN, BASE_CLIENT_URL } from "../constants";
import getRefreshToken from "../utils/helpers/getRefreshToken";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

// @desc    To a create a new User account.
// @route   POST /api/auth/register
// @access  Public
// @type    POST
export const registerUser = async (req, res, next) => {
  const { username, email, password, confirmPassword, firstName, lastName } =
    req.body;

  let user = await User.findOne({ username });

  //Check if the username is taken or not
  if (user) {
    return next(new ApiError("Username is already in use.", 401));
  }

  //Check if the user exists with that email
  user = await User.findOne({ email });

  if (user) {
    return next(new ApiError("E-mail already in use.", 401));
  }

  if (password !== confirmPassword) {
    return next(new ApiError("Password must be same", 401));
  }

  user = new User({
    ...req.body,
    firstName: capitalizeFirstLetter(firstName),
    lastName: capitalizeFirstLetter(lastName),
    verificationCode: randomBytes(20).toString("hex"),
  });

  await user.save();

  const HTMLMARKUP = `
     <div>
        <h1>Hello, ${username}!</h1>
        <p>Please click the following link to verify your account.</p>
        <a href="${BASE_CLIENT_URL}/auth/verify-account/${user.verificationCode}" target="_blank"><button>Verify Now</button></a>
     </div>
    `;

  await sendEmail(
    email,
    "Verify Account",
    "Please verify your account",
    HTMLMARKUP,
    next
  );

  return res.status(201).json({
    success: true,
    message:
      "We sent you an activation code. Check your email and click on the link to verify.",
  });
};

// @desc    To a verify a new users account via email
// @route   POST /api/auth/verify-now/:verificationCode
// @access  Public <Only via email>
// @type    GET
export const verifyUser = async (req, res, next) => {
  const { verificationCode } = req.params;

  const user = await User.findOne({ verificationCode });

  if (!user) {
    return next(
      new ApiError(
        "Unauthorized access. Invalid verificationCode returned.",
        401
      )
    );
  }

  user.verified = true;
  user.verificationCode = undefined;

  user.save();

  return res.status(201).json({
    success: true,
    message: "You're account has now verified, please login.",
  });
};

// @desc    To authenticate an user and get auth token
// @route   POST /api/auth/authenticate
// @access  Public
// @type    POST
export const authenticateUser = async (req, res, next) => {
  const { username, password } = req.body;
  const ipAddress = req.ip;

  const user = await User.findOne({ username });

  if (!user) {
    return next(new ApiError("Incorrect username or password.", 401));
  }

  if (!(await user.matchPasswords(password))) {
    return next(new ApiError("Incorrect username or password.", 401));
  }

  const message = "You are now logged in.";

  setAccessToken(message, res, user, ipAddress);
};

// @desc    To a verify a new users account via email
// @route   GET /api/auth/checkpoint/:id
export const accountCheckpoint = async (req, res, next) => {
  const { user } = req;

  console.log("user", user);

  if (!user.verified) {
    return res.status(201).json({
      success: true,
      message: "We sent you an activation link to your email.",
    });
  }
};

// @desc    To authenticate google
// @route   GET /api/auth/google
// @access  Public
// @type    GET
export const authenticateGoogle = (req, res) => {
  const { user, ip } = req;

  console.log("user", user);
  console.log("MSg", " You are now authenticated.");
  // setAccessToken("You are now authenticated.", res, user, ip);
};

// @desc    Forgot user password
// @route   POST /api/auth/forgot-Password
// @access  Public
// @type    POST
export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return next(new ApiError("Invalid email address", 404));
  }

  const resetToken = user.generatePasswordReset();

  await user.save();
  // Sent the password reset Link in the email.
  try {
    const HTMLMARKUP = `
      <div>
        <h1>Hello, ${user.username}!</h1>
        <p>You told us you forgot your password. If you really did, click here to create a new one: </p>
        <a href="${BASE_CLIENT_URL}/auth/reset-password/${resetToken}" clicktracking=off target="_blank"><button>RESET PASSWORD</button></a>
        <p>If you didn't mean to reset your password, then you can just ignore this email; your password will not change.</p>
      </div>
    `;

    await sendEmail(
      email,
      "Password Reset",
      "You have requested a password reset",
      HTMLMARKUP,
      next
    );

    return res.status(200).json({
      success: true,
      message: "Please check your email for password reset instructions",
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpireIn = undefined;

    return next(new ApiError("An error occured while sending the email", 500));
  }
};

// @desc    Reset user password  <Via Email>
// @route   POST /api/auth/reset-password/:resetToken
// @access  Private
// @type    PUT
export const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpireIn: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ApiError("Your reset password link is expired", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpireIn = undefined;

  await user.save();

  const HTMLMARKUP = `
      <div>
        <h1>Hello, ${user.username}!</h1>
        <p>Your password resetted successfully.</p>
        <p>If this reset password is not done by you then you can contact our team.</p>
      </div>
    `;

  try {
    await sendEmail(
      user.email,
      "Reset Password Successful",
      "Your password is changed.",
      HTMLMARKUP,
      next
    );

    return res.status(201).json({
      success: true,
      message:
        "Congratulations! You have successfully changed your password. You can now login to your account",
    });
  } catch (error) {
    return next(
      new ApiError("Error while resetting password. Please try again.", 500)
    );
  }
};

// @desc    To logout user.
// @route   /api/auth/logout
// @access  Private
// @type    DELETE
export const logoutUser = async (req, res, next) => {
  const { refreshToken } = req.cookies;

  req.logout();
  res.clearCookie("refreshToken", { expires: new Date(0) });
  res.clearCookie("accessToken");
  res.cookie("MrsPCrochetWorks", { expires: new Date(0) });
  await RefreshToken.findOneAndDelete(refreshToken);

  return res
    .status(200)
    .json({ success: true, message: "You are now logged out" });
};

// @desc    To refresh the access token.
// @route   /api/auth/refresh-access-token
// @access  Private
// @type    POST
export const refreshAccessToken = async (req, res, next) => {
  const token = req.cookies.refreshToken;
  const ipAddress = req.ip;

  if (token === null || !token) {
    return next(new ApiError("Access denied", 403));
  }

  const tokenFromDocument = await getRefreshToken(token, next);

  if (!tokenFromDocument) {
    return next(new ApiError("Invalid token. Unauthorized.", 401));
  }

  const verifiedRefreshToken = jwt.verify(
    tokenFromDocument.refreshToken,
    REFRESH_TOKEN
  );

  if (!verifiedRefreshToken) {
    return next(new ApiError("Invalid token. Unauthorized", 401));
  }

  setRefreshToken(res, tokenFromDocument, ipAddress);
};

// @desc    To revoke the token.
// @route   /api/auth/revoke-token
// @access  Private
// @type    POST
export const revokeUserToken = async (req, res, next) => {
  const token = req.cookies.refreshToken || req.body.accessToken;
  const ipAddress = req.ip;

  if (!token) {
    return next(new ApiError("Token is required", 400));
  }

  // && req.user.role !== ADMIN_ROLE

  // users can revoke their own tokens and admins can revoke any tokens
  if (!req.user.ownsToken(token)) {
    return next(new ApiError("Token is invalid. Unauthorized access", 401));
  }

  const tokenFromDocument = await getRefreshToken(token, next);

  if (!tokenFromDocument) {
    return next(new ApiError("Invalid token. Unauthorized", 401));
  }

  const decodedRefreshToken = jwt.verify(
    tokenFromDocument.refreshToken,
    REFRESH_TOKEN
  );

  if (!decodedRefreshToken) {
    return next(new ApiError("Invalid token. Unauthorized", 401));
  }

  revokeToken(res, tokenFromDocument, ipAddress);
};

// @desc    To validate the token.
// @route   /api/auth/validate-token
// @access  Private
// @type    POST
export const validateToken = async (req, res, next) => {
  const accessToken = req.header("authorization");

  if (!accessToken) {
    return next(new ApiError("Token is invalid. Unauthorized access", 401));
  }

  const decoded = await jwt.verify(accessToken, ACCESS_TOKEN);

  if (!decoded) {
    return next(new ApiError("Token is invalid. Unauthorized access", 401));
  }

  const user = await User.findById(decoded.user._id);

  if (!user) {
    return next(new ApiError("There were an error.", 400));
  }

  return res.json({ success: true, message: "Authenticated" });
};

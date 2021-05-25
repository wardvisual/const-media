import crypto from "crypto";
import bcrypt from "bcryptjs";
import { pick } from "lodash";
import jwt from "jsonwebtoken";

import RefreshToken from "./RefreshToken";
import { Schema, model } from "mongoose";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Address from "./Address";

const userSchema = Schema(
  {
    avatar: {
      type: String,
      required: false,
    },
    firstName: {
      min: 3,
      max: 20,
      trim: true,
      type: String,
      required: [true, "First Name is required"],
    },

    lastName: {
      min: 3,
      max: 20,
      trim: true,
      type: String,
      required: [true, "Last Name is required"],
    },
    username: {
      trim: true,
      index: true,
      unique: true,
      type: String,
      lowerCase: true,
      required: [true, "Username is required"],
    },
    email: {
      trim: true,
      type: String,
      unique: true,
      lowerCase: true,
      required: () => (this.provider !== "email" ? false : true),
    },
    phoneNumber: {
      type: String,
    },
    password: {
      trim: true,
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    provider: {
      type: String,
      required: true,
      default: "email",
    },
    googleId: {
      type: String,
      unique: true,
    },
    facebookId: {
      type: String,
      unique: true,
    },
    role: {
      type: Number,
      enum: [0, 1], // 0 = basic user, 1 = admin
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    resetPasswordToken: String,
    resetPasswordExpireIn: Date,
  },
  { timestamps: true }
);

userSchema["pre"]("save", async function (next) {
  !this.isModified("password") && next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema["methods"] = {
  matchPasswords: async function (password) {
    return await bcrypt.compare(password, this.password);
  },

  signAccessToken: function ({
    firstName,
    lastName,
    username,
    email,
    role,
    _id,
  }) {
    const payload = {
      firstName,
      lastName,
      username,
      email,
      role,
      _id,
    };
    return jwt.sign({ user: payload }, ACCESS_TOKEN, {
      expiresIn: "1d", //5s
    });
  },

  signRefreshToken: function (
    { firstName, lastName, username, email, role, _id },
    ipAddress
  ) {
    const payload = {
      firstName,
      lastName,
      username,
      email,
      role,
      _id,
    };

    const refreshToken = jwt.sign({ user: payload }, REFRESH_TOKEN, {
      expiresIn: "7d",
    });

    return new RefreshToken({
      user: _id,
      refreshToken,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days, it should be the same with the given expiration date in refresh token
      createdByIp: ipAddress,
    });
  },

  generatePasswordReset: function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    this.resetPasswordExpireIn = Date.now() + 15 * (60 * 1000); //10 minutes

    return resetToken;
  },

  getUserInfo: function () {
    return pick(this, [
      "firstName",
      "lastName",
      "username",
      "verified",
      "avatar",
      "email",
      "role",
      "_id",
    ]);
  },
};

// userSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     // remove these props when object is serialized
//     delete ret._id;
//     delete ret.password;
//   },
// });

export default model("User", userSchema);

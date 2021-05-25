import express from "express";
import passport from "passport";
const router = express.Router();

import {
  verifyUser,
  logoutUser,
  registerUser,
  resetPassword,
  validateToken,
  forgotPassword,
  revokeUserToken,
  authenticateUser,
  refreshAccessToken,
  accountCheckpoint,
  authenticateGoogle,
} from "../controllers/auth";
import {
  validateSignInRequest,
  validateSignUpRequest,
  validateForgotPasswordByEmail,
} from "../validators/validateAuth";
import { protect } from "../middleware/auth";
import { isRequestValidated } from "../middleware/validator";
import valdidateToken from "../validators/validateToken";
import asyncHandler from "../middleware/asyncHandler";

router.post("/logout", asyncHandler(logoutUser));

router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
    accessType: "offline",
    approvalPrompt: "force",
  })
);
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/fail",
    session: false,
  }),
  asyncHandler(authenticateGoogle)
);

router.post(
  "/revoke-token",
  protect,
  valdidateToken,
  isRequestValidated,
  asyncHandler(revokeUserToken)
);

router.get("/success", () => {
  console.log("success");
});

router.get("/fail", () => {
  console.log("fail");
});

router.post("/validate-token", asyncHandler(validateToken));

router.post("/refresh-access-token", asyncHandler(refreshAccessToken));

router.put("/reset-password/:resetToken", asyncHandler(resetPassword));

router
  .route("/register")
  .post(validateSignUpRequest, isRequestValidated, asyncHandler(registerUser));

router.get("/verify-account/:verificationCode", asyncHandler(verifyUser));
router.get("/checkpoint", asyncHandler(accountCheckpoint));

router
  .route("/authenticate")
  .post(
    validateSignInRequest,
    isRequestValidated,
    asyncHandler(authenticateUser)
  );

router.post(
  "/forgot-password",
  validateForgotPasswordByEmail,
  asyncHandler(forgotPassword)
);

export default router;

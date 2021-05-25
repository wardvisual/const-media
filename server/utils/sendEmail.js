import nodemailer from "nodemailer";
import {
  EMAIL_FROM,
  EMAIL_PASSWORD,
  EMAIL_SERVICE,
  EMAIL_USERNAME,
} from "../constants";
import ApiError from "./ApiError";

const sendEmail = async (to, subject, text, html, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Const Media <${EMAIL_FROM}>`,
      to,
      text,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    return next(new ApiError("Error while sending mail", 400));
  } finally {
    return;
  }
};

export default sendEmail;

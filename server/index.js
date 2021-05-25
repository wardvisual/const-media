/* Dependencies Imports */
import express from "express";
const logger = require("morgan"); // deprecated when use import from es6, so i used require to import morgan.
import passport from "passport";
import { json, urlencoded } from "body-parser";
import { join, resolve } from "path";
import cookieParser from "cookie-parser";

/* Initialize express application */
const app = express();

/* Import Application Configuration */
import { cors, db as connectDB, passport as passportConfig } from "./config/";

/* Router Imports */
import { auth, user } from "./routes";

/* Import Application Middlewares */
import errorHandler from "./middleware/errorHandler";
import asyncHandler from "./middleware/asyncHandler";

/* Import Application Constants */
import {
  MONGO_URI,
  NODE_ENV,
  PORT,
  BASE_API_URL,
  BASE_CLIENT_URL,
} from "./constants";

/* Passport session setup */
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

/* Apply application Middlewares */
cors(app);
app.use(json());
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
// app.use(passport.session());
passportConfig(passport);

// app.use(csurf({ cookie: true }));
app.use(urlencoded({ extended: false }));

/* Routes */
app.use(`${BASE_API_URL}/auth`, auth);
app.use(`${BASE_API_URL}/users`, user);

/* Start Application */
asyncHandler(() => {
  if (NODE_ENV !== "production") {
    app.use(logger("dev"));
    app.use(errorHandler());
  } else {
    app.use(express.static(path.resolve(__dirname, "../dist")));
    app.use(express.static(join(__dirname, "../uploads")));
    app.get("*", (req, res) => {
      res.sendFile(resolve(__dirname, "../dist/index.html"));
    });
  }

  /* Connect with the database */
  connectDB(MONGO_URI);
  const server = app.listen(PORT, () =>
    console.log(`>> Server at http://localhost:${PORT}`)
  );

  process.on("unhandleRejection", (err, promise) => {
    console.log(`>> APP_ERROR:: `, err);
    server.close(() => process.exit(1));
  });
});

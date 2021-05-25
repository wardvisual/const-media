import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {
  PORT,
  BASE_API_URL,
  BASE_SERVER_URL,
  BASE_CLIENT_URL,
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../constants";
import User from "../models/User";

export default (passport) => {
  // ${BASE_CLIENT_URL}${BASE_API_URL}${GOOGLE_CALLBACK_URL}
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: `${BASE_SERVER_URL}:${PORT}${BASE_API_URL}${GOOGLE_CALLBACK_URL}`,
        passReqToCallback: true,
      },
      async (accessToken, refreshToken, profile, done) => {
        const currentUser = await User.findOne({ email: profile.email });

        // console.log("FROM GOOGLE STRATEGY > ", { accessToken, refreshToken });
        console.log(">> ", profile);
        console.log(">> NICE");

        if (currentUser) {
          done(null, currentUser);
        }

        // const { displayName, email, picture, id } = profile;
        // const name = displayName.split(" ");

        // const newUser = new User({
        //   provider: "google",
        //   googleId: id,
        //   email,
        //   firstName: name[0],
        //   lastName: name[1],
        //   avatar: picture,
        //   password: null,
        // });

        // newUser
        //   .save((err, user) => {
        //     if (err) {
        //       return done(err, false);
        //     }

        //     return done(null, user);
        //   })
        //   .catch((err) => {
        //     return done(err, false);
        //   });
      }
    )
  );
};

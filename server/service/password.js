const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { User } = require("../model/class/user");

passport.serializeUser(function (profile, cb) {
        cb(null, profile.googleId);
});

passport.deserializeUser(function (profile, cb) {
        cb(null, profile.googleId);
});

passport.use(
        new GoogleStrategy(
                {
                        clientID: process.env.GOOGLE_ID,
                        clientSecret: process.env.GOOGLE_SECRET,
                        callbackURL: "/user/auth/google/callback",
                },
                async function (accessToken, refreshToken, profile, cb) {
                        const isUser = await User.getUser(profile.id);

                        if (!isUser) {
                                const { data } = User.createNewUser(profile.displayName, profile.id);
                                cb(null, data);
                        } else {
                                cb(null, isUser);
                        }
                }
        )
);

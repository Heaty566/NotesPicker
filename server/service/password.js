const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { User } = require("../model/class/user");

passport.serializeUser(function (user, cb) {
        cb(null, user);
});

passport.deserializeUser(function (user, cb) {
        cb(null, user);
});

passport.use(
        new GoogleStrategy(
                {
                        clientID: process.env.GOOGLE_ID,
                        clientSecret: process.env.GOOGLE_SECRET,
                        callbackURL: "/api/user/auth/google/callback",
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

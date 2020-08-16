const passport = require("passport");
const express = require("express");
const router = express.Router();

router.post("/logout", (req, res) => {
        delete req.session.passport;
        res.status(200).json({ msg: "logout successes" });
});

router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: `${process.env.CLIENT_URL}/home` }), (req, res) => {
        res.redirect(`${process.env.CLIENT_URL}/done`);
});

module.exports = router;

const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/home" }), function (req, res) {
        console.log("done");
        res.redirect("/");
});

module.exports = router;

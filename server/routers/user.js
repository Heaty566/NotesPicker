const express = require("express");
const router = express();
const _ = require("lodash");
const { User } = require("../model/class/user");

router.get("/me", (req, res) => {
        if (!req.session.passport) return res.status(200).json({ data: null });

        const user = User.convertClass(_.pick(req.session.passport.user, ["name", "googleId"]));
        res.status(200).json({ data: user._name, msg: "login successes" });
});

router.get("/getRecords", (req, res) => {
        if (!req.session.passport) return res.status(200).json({ data: null });

        const user = User.convertClass(_.pick(req.session.passport.user, ["name", "googleId"]));
        res.status(200).json({ data: user._records });
});

module.exports = router;

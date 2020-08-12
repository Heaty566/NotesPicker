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

router.post("/addNewNote", (req, res) => {
        console.log(req.body);
        console.log(req.session.passport);
        if (!req.session.passport) return res.status(400).json({ msg: "You have to login before saving your note" });
        const user = User.getClassUser(_.pick(req.session.passport.user, ["name", "googleId", "lists"]));
        console.log(user);
});

module.exports = router;

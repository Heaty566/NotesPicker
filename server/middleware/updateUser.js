const { getDB } = require("../app/db");
const _ = require("lodash");
const { User } = require("../model/class/user");

module.exports.updateUser = async (req, res, next) => {
        if (req.session.passport && !req.session.isUpdate) {
                const user = await getDB().collection("users").findOne({ _id: req.session.passport.user._id });
                req.session.passport.user = user;
        }
        if (req.session.passport) req.user = User.getClassUser(_.pick(req.session.passport.user, ["name", "googleId", "lists"]));

        next();
};

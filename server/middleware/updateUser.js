const { getDB } = require("../app/db");

module.exports.updateUser = async (req, res, next) => {
        if (req.session.passport && !req.session.isUpdate) {
                const user = await getDB().collection("users").findOne({ _id: req.session.passport.user._id });
                req.session.passport.user = user;
        }
        next();
};

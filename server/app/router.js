const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");

const auth = require("../routers/auth");
const user = require("../routers/user");

const store = new MongoDBStore({
        collection: "token",
        expires: 86400 * 2,
});

module.exports = function (app) {
        app.use(express.json());
        app.use(passport.initialize());
        app.use(cors());
        app.set(express.static(process.cwd() + "/public"));
        app.use(
                session({
                        secret: process.env.SESSION_SECRET,
                        saveUninitialized: false,
                        store: store,
                })
        );
        app.use((req, res, next) => {
                req.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
                req.header("Access-Control-Allow-Headers", "*");
                req.session.isUpdate = true;
                next();
        });

        app.use("/user", auth);
        app.use("/user", user);
};

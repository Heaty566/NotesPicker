const express = require("express");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");

const auth = require("../routers/auth");

const store = new MongoDBStore({
        collection: "token",
        expires: 86400 * 2,
});

module.exports = function (app) {
        app.use(express.json());
        app.use(passport.initialize());
        app.set(express.static(process.cwd() + "/public"));
        app.use(
                session({
                        secret: process.env.SESSION_SECRET,
                        saveUninitialized: false,
                        store: store,
                })
        );
        app.use("/user", auth);
};

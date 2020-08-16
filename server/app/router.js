const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const bodyParser = require("body-parser");
const auth = require("../routers/auth");
const user = require("../routers/user");

const store = new MongoDBStore({
        collection: "token",
        expires: 86400 * 2,
});

module.exports = function (app) {
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors({ credentials: true }));

        app.use(express.static(process.cwd() + "/public"));
        app.use(
                session({
                        secret: process.env.SESSION_SECRET,
                        saveUninitialized: false,
                        store: store,
                })
        );
        app.use(passport.initialize());

        app.use((req, res, next) => {
                req.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
                req.header("Access-Control-Allow-Headers", "*");
                if (req.session.isUpdate === undefined) req.session.isUpdate = true;
                next();
        });

        app.use("/api/user", auth);
        app.use("/api/user", user);
        app.get("/*", (req, res) => {
                res.sendFile(process.cwd() + "/public/index.html");
        });
};

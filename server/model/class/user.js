const { getDB } = require("../../app/db");
const { Respond } = require("./respond");
const { default: helmet } = require("helmet");

module.exports.User = class User {
        constructor(name, googleId) {
                this.name = name;
                this.googleId = googleId;
                this.records = [];
        }

        get _name() {
                return this.name
                        .split(" ")
                        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                        .join(" ");
        }

        static async createNewUser(name, googleId) {
                const userInfo = new User(name, googleId);

                const newUser = await getDB().collection("users").insertOne(userInfo);
                if (!newUser)
                        return new Respond({ status: 400, data: null, msg: "An error occurs during the process" });

                return new Respond({ status: 200, data: newUser, msg: "Register successes" });
        }

        static async getUser(googleId) {
                return await getDB().collection("users").findOne({ googleId: googleId });
        }
};

const { getDB } = require("../../app/db");
const { Respond } = require("./respond");

module.exports.User = class User {
        constructor({ name, googleId }) {
                this._name = name;
                this.googleId = googleId;
                this.lists = [];
        }

        static getClassUser({ name, googleId, lists }) {
                const user = new User({ name, googleId });
                user.lists = lists;
                return user;
        }

        addNewNote(notes) {
                console.log(notes);
        }

        set _name(value) {
                this.name = value.toLowerCase();
        }

        get _name() {
                return this.name
                        .split(" ")
                        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                        .join(" ");
        }

        get _lists() {
                return this.records;
        }

        static async createNewUser(name, googleId) {
                const userInfo = new User({ name, googleId });

                const newUser = await getDB().collection("users").insertOne(userInfo);
                if (!newUser)
                        return new Respond({ status: 400, data: null, msg: "An error occurs during the process" });

                return new Respond({ status: 200, data: newUser, msg: "Register successes" });
        }

        static convertClass(user) {
                return new User(user);
        }

        static async getUser(googleId) {
                return await getDB().collection("users").findOne({ googleId: googleId });
        }
};

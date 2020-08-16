const { getDB } = require("../../app/db");
const { Response } = require("./response");
const colors = require("colors");
const Joi = require("@hapi/joi");

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

        async addNewNote(notes) {
                const schema = Joi.object({
                        name: Joi.string().min(1).max(100).trim().label("Note's name").required(),
                        data: Joi.array().items(
                                Joi.object({
                                        name: Joi.string().min(1).max(30).trim().label("Note").required(),
                                        data: Joi.string().min(1).max(1000).label("Note's data").required(),
                                })
                                        .label("Data")
                                        .required()
                        ),
                });

                const { error, value } = schema.validate(notes, { abortEarly: false });
                if (error) return new Response(400, null, error.details[0].message);

                const index = this.lists.findIndex((item) => item.name === notes.name);

                const query = index !== -1 ? { $set: { [`lists.${index}`]: value } } : { $push: { lists: value } };
                const newNote = await getDB().collection("users").updateOne({ googleId: this.googleId }, query);
                if (!newNote) {
                        console.log(colors.red("Server can't update note"));
                        return new Response(400, null, "Server error");
                }

                return new Response(200, null, "Note is updated");
        }

        async deleteNote(noteId) {
                const updateNote = this.lists.filter((_, index) => index !== +noteId);

                const newNote = await getDB()
                        .collection("users")
                        .updateOne({ googleId: this.googleId }, { $set: { lists: updateNote } });
                if (!newNote) {
                        console.log(colors.red("Server can't update note"));
                        return new Response(400, null, "Server error");
                }
                return new Response(200, null, "Note is updated");
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
                return this.lists;
        }

        static async createNewUser(name, googleId) {
                const userInfo = new User({ name, googleId });

                const newUser = await getDB().collection("users").insertOne(userInfo);
                if (!newUser) return new Response({ status: 400, data: null, msg: "An error occurs during the process" });

                console.log(colors.green(`New user created with the id: ${newUser.insertId}`));
                return new Response({ status: 200, data: newUser, msg: "Register successes" });
        }

        static async getUser(googleId) {
                return await getDB().collection("users").findOne({ googleId: googleId });
        }
};

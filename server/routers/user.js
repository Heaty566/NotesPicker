const express = require("express");
const router = express();
const _ = require("lodash");
const { updateUser } = require("../middleware/updateUser");
const { User } = require("../model/class/user");
const { use } = require("./auth");

router.get("/me", [updateUser], (req, res) => {
        if (!req.session.passport) return res.status(200).json({ data: null });

        res.status(200).json({ data: req.user._name, msg: "login successes" });
});

router.get("/getRecords", [updateUser], (req, res) => {
        if (!req.session.passport) return res.status(200).json({ data: null });

        res.status(200).json({ data: req.user._lists });
});

router.delete("/deleteNote/:noteId", [updateUser], async (req, res) => {
        if (!req.session.passport) return res.status(400).json({ msg: "You have to login before saving your note" });

        const deleteNote = await req.user.deleteNote(req.params.noteId);
        req.session.isUpdate = false;

        res.status(deleteNote.statusCode).json(deleteNote);
});

router.post("/addNewNote", [updateUser], async (req, res) => {
        if (!req.session.passport) return res.status(400).json({ msg: "You have to login before saving your note" });
        const note = { name: req.body.name, data: req.body.data };

        const addNote = await req.user.addNewNote(note);
        req.session.isUpdate = false;

        res.status(addNote.statusCode).json(addNote);
});

module.exports = router;

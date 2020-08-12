import React, { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Controller from "./presentations/Controller";
import { Grid, Divider } from "@material-ui/core";

function App() {
        const [username, setUsername] = useState(null);
        const [isLogin, setLogin] = useState(false);
        const [lists, setLists] = useState([]);
        const [currentRecord, setCurrentRecord] = useState(0);
        const noteName = useRef("");
        const [notes, setNotes] = useState([{ name: React.createRef(""), data: React.createRef("") }]);

        useEffect(() => {
                async function fetch() {
                        const {
                                data: { data: records },
                        } = await axios.get("/user/getRecords");

                        const {
                                data: { data: name, msg },
                        } = await axios.get("/user/me");
                        if (name) {
                                toast.success(msg);
                                setLogin(true);
                        }
                        setLists(records);
                        setUsername(name);
                }

                fetch();
        }, []);

        const handleOnDeleteNotes = useCallback(
                (index) => {
                        if (notes.length > 1) setNotes((item) => item.filter((item, itemIndex) => itemIndex !== index));
                        else toast.error("You can't delete this note");
                },
                [notes]
        );

        const handleOnAddNotes = useCallback(() => {
                setNotes((item) => [...item, { name: React.createRef(""), data: React.createRef("") }]);
        }, []);

        const handleOnChangeNotes = useCallback(
                (index, input) => {
                        notes[index][input.name].current = input.value;

                        if (!notes[index + 1]) handleOnAddNotes();

                        if (
                                !notes[index]["name"].current &&
                                !notes[index + 1]["name"].current &&
                                !notes[index + 1]["data"].current
                        )
                                handleOnDeleteNotes(index + 1);
                },
                [handleOnDeleteNotes, handleOnAddNotes, notes]
        );

        const handleOnSaveNote = useCallback(async () => {
                const nameNote = typeof noteName.current === "object" ? "" : noteName.current;
                const data = notes.map((item) => {
                        return {
                                name: typeof item["name"].current === "object" ? "" : item["name"].current,
                                data: typeof item["data"].current === "object" ? "" : item["data"].current,
                        };
                });

                await axios.post(
                        "/user/addNewNote",
                        { noteName: nameNote, data: data },
                        {
                                headers: {
                                        "Content-Type": "application/json",
                                },
                        }
                );
                // .then(({ data: { msg } }) => toast.success(msg))
                // .catch(({ response: { data: { msg = "" } } }) => toast.error(msg));
        }, []);

        const handleOnLogout = useCallback(async () => {
                const {
                        data: { msg },
                } = await axios.post("/user/logout");
                toast.success(msg);

                setLogin(false);
        }, [setLogin]);

        return (
                <React.Fragment>
                        <Grid container className="container">
                                <ToastContainer
                                        position="top-right"
                                        autoClose={4000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                />
                                <Controller
                                        //
                                        username={username}
                                        isLogin={isLogin}
                                        handleOnLogout={handleOnLogout}
                                        //
                                        lists={lists}
                                        noteName={noteName}
                                        handleOnChangeNoteName={({ target }) => (noteName.current = target.value)}
                                        handleOnSaveNote={handleOnSaveNote}
                                        currentList={currentRecord}
                                        handleOnChangeList={({ target }) => setCurrentRecord(target.value)}
                                        //
                                        notes={notes}
                                        handleOnChangeNotes={handleOnChangeNotes}
                                        handleOnDeleteNotes={handleOnDeleteNotes}
                                        handleOnAddNotes={handleOnAddNotes}
                                />
                        </Grid>
                </React.Fragment>
        );
}

export default App;

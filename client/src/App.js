import React, { useEffect, useState, useCallback, useRef } from "react";
import "./App.css";

import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Controller from "./presentations/Controller";
import { Grid } from "@material-ui/core";

function App() {
        const [name, setName] = useState(null);
        const [isLogin, setLogin] = useState(false);
        const [records, setRecords] = useState([]);
        const [currentRecord, setCurrentRecord] = useState(0);
        const [noteLength, setNoteLength] = useState(3);
        const [notes, setNotes] = useState([]);

        useEffect(() => {
                const items = Array.from({ length: noteLength }, () => ({
                        name: React.createRef(""),
                        data: React.createRef(""),
                }));
                setNotes(items);
        }, []);

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
                        setRecords(records);
                        setName(name);
                }

                fetch();
        }, []);

        const handleOnChangeNotes = (index, input) => {
                notes[index][input.name].current = input.value;
        };

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
                                        autoClose={3000}
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
                                        name={name}
                                        isLogin={isLogin}
                                        handleOnLogout={handleOnLogout}
                                        //
                                        records={records}
                                        currentRecord={currentRecord}
                                        handleOnChangeRecord={({ target }) => setCurrentRecord(target.value)}
                                        //
                                        notes={notes}
                                        handleOnChangeNotes={handleOnChangeNotes}
                                />
                        </Grid>
                </React.Fragment>
        );
}

export default App;

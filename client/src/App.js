import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import UserSection from "./components/UserSection";
import AuthUser from "./components/AuthUser";
import Divider from "./helper/divider";
import NotesCol from "./components/NotesCol";
import { Grid, Paper } from "@material-ui/core";

function App() {
        const [name, setName] = useState(null);
        const [isLogin, setLogin] = useState(false);
        const [records, setRecords] = useState(null);
        const [currentRecord, setCurrentRecord] = useState(0);
        const [notes, setNotes] = useState([]);

        useEffect(() => {
                async function fetch() {
                        const {
                                data: { data: records },
                        } = await axios.get("/user/getRecords");
                        const {
                                data: { data: name },
                        } = await axios.get("/user/me");
                        if (name) setLogin(true);
                        setRecords(records);
                        setName(name);
                }

                fetch();
        }, []);

        const handleOnLogout = useCallback(async () => {
                const data = await axios.post("/user/logout");
                setLogin(false);
        }, [setLogin]);

        return (
                <div className="App">
                        <Grid container className="container">
                                <Grid
                                        container
                                        item
                                        lg={3}
                                        md={4}
                                        style={{
                                                minHeight: "100%",
                                                background: "#fefefe",
                                                padding: "16px 24px",
                                                display: "flex",
                                        }}
                                        alignItems="center"
                                        direction="column"
                                >
                                        <Link to="/home" className="m-b-2">
                                                <img
                                                        src={process.env.PUBLIC_URL + "/asset/image/logo.svg"}
                                                        style={{ height: "64px", objectFit: "cover" }}
                                                        alt="Notes Picker"
                                                />
                                        </Link>
                                        <AuthUser handleOnLogout={handleOnLogout} name={name} isLogin={isLogin} />
                                        <Divider />
                                        <UserSection
                                                value={currentRecord}
                                                onChange={({ target }) => setCurrentRecord(target.value)}
                                        />
                                        <Divider />
                                        <NotesCol />
                                </Grid>
                                <Grid item lg={9} md={8}>
                                        test
                                        <Paper elevation={3} />
                                </Grid>
                        </Grid>
                </div>
        );
}

export default App;

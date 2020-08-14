import React, { useState, useCallback, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Divider from "../components/common/Divider";
import { useFieldArray, useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import AuthUser from "../components/AuthUser";
import NotesCol from "../components/NotesCol";
import UserSection from "../components/UserSection";
import Logo from "../components/common/Logo";

import WorkSpace from "./workspace";
const FormContext = React.createContext();

const Controller = () => {
        const [username, setUsername] = useState(null);
        const [isLogin, setLogin] = useState(false);
        const [isNeedUpdate, setNeedUpdate] = useState(false);
        const [lists, setLists] = useState([]);
        const [local] = useState(localStorage.getItem("notes"));

        const [notes] = useState(local ? JSON.parse(local) : [{ name: "", data: "" }]);
        const { control, getValues, handleSubmit, setValue, watch } = useForm({
                defaultValues: {
                        notes: notes,
                },
        });

        const watcherNotes = watch("notes");

        const { append, remove, fields } = useFieldArray({
                name: "notes",
                control,
        });

        useEffect(() => {
                setValue("notes", local ? JSON.parse(local) : [{ name: "", data: "" }]);
        }, [setValue, local]);

        useEffect(() => {
                if (!isNeedUpdate) {
                        localStorage.setItem("notes", JSON.stringify(getValues().notes));
                }
        }, [getValues, watcherNotes, isNeedUpdate]);

        useEffect(() => {
                axios.get("/user/getRecords").then(({ data: { data: listNote } }) => {
                        setLists(listNote);
                });
                axios.get("/user/me").then(({ data: { data: name, msg } }) => {
                        if (name) {
                                toast.success(msg);
                                setUsername(name);
                                setLogin(true);
                        }
                });
        }, [setValue]);

        const handleOnImportNote = useCallback(
                ({ selectNote: note }) => {
                        if (note === "default") {
                                toast.warn("Please select your note");
                                return;
                        }

                        if (lists[note].data) {
                                setNeedUpdate(true);
                                toast.success("Importing successes");
                                remove();
                                lists[note].data.forEach((_) => {
                                        append();
                                });
                                setNeedUpdate(false);

                                append();
                                setValue("name", lists[note].name);
                                setValue("notes", lists[note].data);
                        } else {
                                setValue("name", lists[note].name);
                                toast.success("Importing empty");
                        }
                },
                [append, lists, remove, setValue]
        );

        const handleOnDeleteNote = useCallback(() => {
                const current = getValues("selectNote");

                if (current === "default") {
                        toast.warn("Please select your note");
                        return;
                }

                axios.delete(`/user/deleteNote/${getValues().selectNote}`)
                        .then(({ data: { msg } }) => {
                                toast.success(msg);

                                axios.get("/user/getRecords").then(({ data: { data: listNote } }) => {
                                        setLists(listNote);
                                });
                        })
                        .catch(({ response: { data: { msg = "" } } }) => toast.error(msg));
        }, [getValues]);

        const handleOnSubmitNotes = useCallback(({ name, notes }) => {
                axios.post(
                        "/user/addNewNote",
                        { name: name, data: notes },
                        {
                                headers: {
                                        "Content-Type": "application/json",
                                },
                        }
                )
                        .then(({ data: { msg } }) => {
                                toast.success(msg);
                                axios.get("/user/getRecords").then(({ data: { data: listNote } }) => {
                                        setLists(listNote);
                                });
                        })
                        .catch(({ response: { data: { msg = "" } } }) => toast.error(msg));
        }, []);

        const handleOnLogout = () => {
                axios.post("/user/logout").then(({ data: { msg } }) => {
                        toast.success(msg);
                        setLogin(false);
                });
        };

        return (
                <React.Fragment>
                        <Grid container className="container">
                                <Grid
                                        container
                                        item
                                        xs={6}
                                        md={4}
                                        lg={3}
                                        style={{
                                                minHeight: "100%",
                                                background: "#fefefe",
                                                padding: "16px 24px",
                                        }}
                                        alignItems="center"
                                        direction="column"
                                >
                                        <Logo />

                                        <FormContext.Provider value={{ control: control, isLogin: isLogin }}>
                                                <AuthUser handleOnLogout={handleOnLogout} username={username} />
                                                <Divider />

                                                <UserSection
                                                        lists={lists}
                                                        onSubmit={handleSubmit(handleOnImportNote)}
                                                        handleOnDelete={handleOnDeleteNote}
                                                />
                                                <Divider />

                                                <NotesCol
                                                        values={fields}
                                                        onSubmit={handleSubmit(handleOnSubmitNotes)}
                                                        handleOnDelete={(index) => {
                                                                toast.success("Deleted Note");
                                                                remove(index);
                                                        }}
                                                        handleOnAdd={() => {
                                                                toast.success("Added Note");
                                                                append();
                                                        }}
                                                />
                                        </FormContext.Provider>
                                </Grid>
                                <Grid container xs={6} md={8} lg={9} item>
                                        <WorkSpace data={getValues().notes} />
                                </Grid>
                        </Grid>
                </React.Fragment>
        );
};

export { FormContext };
export default Controller;

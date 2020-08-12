import React from "react";
import AuthUser from "../components/AuthUser";
import Divider from "../helper/divider";
import NotesCol from "../components/NotesCol";
import UserSection from "../components/UserSection";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

let count = 0;
const Controller = ({
        //Auth User
        name,
        isLogin,
        handleOnLogout,

        //User Section
        records,
        currentRecord,
        handleOnChangeRecord,

        //Notes Column
        notes,
        handleOnChangeNotes,
        handleOnDeleteNotes,
}) => {
        return (
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
                                currentValue={currentRecord}
                                handleOnChange={handleOnChangeRecord}
                                values={records}
                        />

                        <Divider />
                        <NotesCol
                                values={notes}
                                handleOnChange={handleOnChangeNotes}
                                handleOnDelete={handleOnDeleteNotes}
                        />
                </Grid>
        );
};

export default Controller;
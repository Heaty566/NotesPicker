import React from "react";
import { Grid, Fab } from "@material-ui/core";
import { Delete, Add as AddIcon } from "@material-ui/icons";
import InputButton from "./common/InputButton";

import Input from "./common/Input";

const NotesCol = ({ values = [], onSubmit, handleOnDelete, handleOnAdd }) => {
        return (
                <form id="myform" onSubmit={onSubmit}>
                        <Grid container>
                                {values.map((item, index) => {
                                        return (
                                                <Grid
                                                        key={item.id}
                                                        container
                                                        spacing={1}
                                                        style={{ marginBottom: "8px" }}
                                                >
                                                        <Grid item xs={3}>
                                                                <Input
                                                                        name={`notes[${index}].name`}
                                                                        defaultValue=""
                                                                        label={`Note ${index + 1}`}
                                                                />
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                                <Input
                                                                        name={`notes[${index}].data`}
                                                                        defaultValue=""
                                                                        label={`Data ${index + 1}`}
                                                                />
                                                        </Grid>
                                                        <Grid
                                                                item
                                                                xs={4}
                                                                container
                                                                alignItems="center"
                                                                justify="center"
                                                        >
                                                                <InputButton
                                                                        onClick={() => handleOnDelete(index)}
                                                                        StartIcon={<Delete />}
                                                                        color="secondary"
                                                                        label="Delete"
                                                                />
                                                        </Grid>
                                                </Grid>
                                        );
                                })}
                                <Grid container justify="center">
                                        <Fab color="primary" aria-label="add" size="small" onClick={handleOnAdd}>
                                                <AddIcon />
                                        </Fab>
                                </Grid>
                        </Grid>
                </form>
        );
};

export default NotesCol;

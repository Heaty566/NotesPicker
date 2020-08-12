import React from "react";
import { Grid, Button, TextField, Fab } from "@material-ui/core";
import { Delete, Add as AddIcon } from "@material-ui/icons";

const NotesCol = ({ values = [], handleOnChange, handleOnDelete, handleOnAdd }) => {
        return (
                <Grid container>
                        {values.map((item, index) => {
                                return (
                                        <Grid key={index} container spacing={1} style={{ marginBottom: "10px" }}>
                                                <Grid item md={3}>
                                                        <TextField
                                                                variant="standard"
                                                                name="name"
                                                                ref={item["name"]}
                                                                label={`Note ${index + 1}`}
                                                                size="small"
                                                                onChange={({ target }) => handleOnChange(index, target)}
                                                        />
                                                </Grid>
                                                <Grid item md={5}>
                                                        <TextField
                                                                variant="standard"
                                                                name="data"
                                                                ref={item["data"]}
                                                                onChange={({ target }) => handleOnChange(index, target)}
                                                                label={`Data ${index + 1}`}
                                                                size="small"
                                                        />
                                                </Grid>
                                                <Grid item md={4} container alignItems="center" justify="center">
                                                        <Button
                                                                variant="contained"
                                                                color="secondary"
                                                                onClick={({ target }) => handleOnDelete(index, target)}
                                                                startIcon={<Delete />}
                                                        >
                                                                Delete
                                                        </Button>
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
        );
};

export default NotesCol;

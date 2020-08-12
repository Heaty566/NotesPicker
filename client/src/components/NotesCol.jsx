import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const NotesCol = ({ values = [], handleOnChange, handleOnDelete }) => {
        return (
                <Grid container>
                        {values.map((item, index) => {
                                return (
                                        <Grid key={index} container spacing={1} style={{ marginBottom: "1px" }}>
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
                                                                onChange={({ target }) => handleOnChange(index, target)}
                                                                label={`Data ${index + 1}`}
                                                                size="small"
                                                                // value={item.current["data"]}
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
                </Grid>
        );
};

export default NotesCol;

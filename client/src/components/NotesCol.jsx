import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const NotesCol = ({ notes = [] }) => {
        return (
                <Grid container>
                        <Grid container spacing={1}>
                                <Grid item md={3}>
                                        <TextField variant="standard" label="Name" size="small" />
                                </Grid>
                                <Grid item md={5}>
                                        <TextField variant="standard" label="Data" size="small" />
                                </Grid>
                                <Grid item md={4} container alignItems="center" justify="center">
                                        <Button
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<Delete />}

                                                // size="small"
                                        >
                                                Delete
                                        </Button>
                                </Grid>
                        </Grid>
                </Grid>
        );
};

export default NotesCol;

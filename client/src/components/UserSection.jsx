import React from "react";

import { Grid } from "@material-ui/core";
import { MenuItem, Select, Button, TextField, Typography } from "@material-ui/core";
import { Save, ImportExport } from "@material-ui/icons";

const UserSection = ({
        currentList,
        handleOnChangeLists,
        lists = [],
        noteName,
        handleChangeNoteName,
        handleOnSaveNote,
}) => {
        return (
                <Grid container spacing={1}>
                        <Grid container item>
                                <Typography variant="h5">Menu</Typography>
                        </Grid>
                        <Grid container item justify="center" alignItems="center" spacing={1}>
                                <Grid item md={8}>
                                        <Select
                                                value={currentList}
                                                onChange={handleOnChangeLists}
                                                style={{ width: "100%" }}
                                        >
                                                <MenuItem value={0}>Current Project</MenuItem>
                                                {lists !== null &&
                                                        lists.map((item) => {
                                                                return <MenuItem value={0}>Current Project</MenuItem>;
                                                        })}
                                        </Select>
                                </Grid>
                                <Grid item md={4} container justify="center">
                                        <Button variant="contained" color="primary" startIcon={<ImportExport />}>
                                                Import
                                        </Button>
                                </Grid>
                        </Grid>
                        <Grid container item spacing={1} alignItems="center" justify="center">
                                <Grid item md={8}>
                                        <TextField
                                                style={{ width: "100%" }}
                                                variant="standard"
                                                ref={noteName}
                                                onChange={handleChangeNoteName}
                                                name="name"
                                                size="small"
                                                label="Note Name"
                                        />
                                </Grid>
                                <Grid item md={4} container justify="center">
                                        <Button
                                                onClick={handleOnSaveNote}
                                                variant="contained"
                                                color="primary"
                                                startIcon={<Save />}
                                        >
                                                Save
                                        </Button>
                                </Grid>
                        </Grid>
                </Grid>
        );
};

export default UserSection;

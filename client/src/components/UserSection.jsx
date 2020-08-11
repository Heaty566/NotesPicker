import React from "react";

import { Grid } from "@material-ui/core";
import { FormControl, MenuItem, Select, Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";

const UserSection = ({ value, onChange, records = [] }) => {
        return (
                <Grid container spacing={1}>
                        <Grid item md={8}>
                                <FormControl style={{ background: "#fefefe", padding: "2px", width: "100%" }}>
                                        <Select
                                                value={value}
                                                onChange={onChange}
                                                displayEmpty
                                                inputProps={{ "aria-label": "Without label" }}
                                        >
                                                <MenuItem value={0}>Current Project</MenuItem>
                                                {records.map((item) => {
                                                        return <MenuItem value={0}>Current Project</MenuItem>;
                                                })}
                                        </Select>
                                </FormControl>
                        </Grid>
                        <Grid item md={4} container justify="center">
                                <Button variant="contained" color="primary" startIcon={<Save />}>
                                        Save
                                </Button>
                        </Grid>
                </Grid>
        );
};

export default UserSection;

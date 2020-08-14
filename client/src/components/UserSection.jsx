import React, { useContext } from "react";
import { MenuItem, Select, Typography, Grid } from "@material-ui/core";
import { Save, ImportExport, Delete } from "@material-ui/icons";
import { Controller } from "react-hook-form";

import { FormContext } from "../containers/Controller";
import InputButton from "./common/InputButton";
import Input from "./common/Input";

const UserSection = ({ lists = [], onSubmit, handleOnDelete }) => {
        const { control, isLogin } = useContext(FormContext);

        return (
                <Grid container spacing={1}>
                        <Grid container item>
                                <Typography variant="h5">Menu</Typography>
                        </Grid>
                        <Grid container item spacing={1} alignItems="center" justify="center">
                                <Grid item xs={8}>
                                        <Input name="name" defaultValue="" label="Note Name" />
                                </Grid>
                                <Grid item xs={4} container justify="center">
                                        <InputButton type="submit" StartIcon={<Save />} form="myform" color="primary" label="Save" />
                                </Grid>
                        </Grid>
                        {isLogin && (
                                <Grid container item justify="center" alignItems="center" spacing={1}>
                                        <Grid item xs={4}>
                                                <form id="user-form" onSubmit={onSubmit}>
                                                        <Controller
                                                                name="selectNote"
                                                                control={control}
                                                                defaultValue="default"
                                                                as={
                                                                        <Select style={{ width: "100%" }}>
                                                                                <MenuItem value="default">Select Your Note</MenuItem>
                                                                                {lists !== null &&
                                                                                        lists.map((item, index) => {
                                                                                                return (
                                                                                                        <MenuItem value={index} key={index}>
                                                                                                                {item.name}
                                                                                                        </MenuItem>
                                                                                                );
                                                                                        })}
                                                                        </Select>
                                                                }
                                                        />
                                                </form>
                                        </Grid>
                                        <Grid item xs={4} container justify="center">
                                                <InputButton
                                                        color="primary"
                                                        StartIcon={<ImportExport />}
                                                        type="submit"
                                                        form="user-form"
                                                        label="Import"
                                                />
                                        </Grid>
                                        <Grid item xs={4} container justify="center">
                                                <InputButton
                                                        color="secondary"
                                                        StartIcon={<Delete />}
                                                        type="button"
                                                        form="user-form"
                                                        label="Delete"
                                                        onClick={handleOnDelete}
                                                />
                                        </Grid>
                                </Grid>
                        )}
                </Grid>
        );
};

export default UserSection;

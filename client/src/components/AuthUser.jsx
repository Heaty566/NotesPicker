import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Close } from "@material-ui/icons";
import { Grid, Button, Paper } from "@material-ui/core";

const AuthUser = ({ isLogin, name, handleOnLogout }) => {
        if (!isLogin)
                return (
                        <Grid container>
                                <a className="google btn" href={`${process.env.REACT_APP_SERVER_URL}/user/auth/google`}>
                                        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "8px" }} />
                                        <span>Login with Google+</span>
                                </a>
                        </Grid>
                );

        return (
                <Grid container spacing={1}>
                        <Grid
                                xs={8}
                                item
                                style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: "bold",
                                }}
                        >
                                <Paper
                                        variant="elevation"
                                        style={{
                                                display: "flex",
                                                height: "100%",
                                                width: "100%",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                background: "#34495e",
                                                color: "#fefefe",
                                        }}
                                >
                                        {name}
                                </Paper>
                        </Grid>
                        <Grid xs={4} item container justify="center" alignItems="center">
                                <Button
                                        endIcon={<Close />}
                                        style={{
                                                background: "#dd4b39",
                                                color: "#fefefe",
                                        }}
                                        onClick={handleOnLogout}
                                >
                                        Logout
                                </Button>
                        </Grid>
                </Grid>
        );
};

export default AuthUser;

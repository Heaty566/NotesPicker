import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Grid, Chip } from "@material-ui/core";
import { Close, Face as FaceIcon } from "@material-ui/icons";
import InputButton from "../components/common/InputButton";

import { FormContext } from "../containers/Controller";

const AuthUser = ({ username, handleOnLogout }) => {
        const { isLogin } = useContext(FormContext);

        if (!isLogin)
                return (
                        <Grid container>
                                <a className="google google__btn" href={`${process.env.REACT_APP_SERVER_URL}/user/auth/google`}>
                                        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "8px" }} />
                                        <span>Login with Google+</span>
                                </a>
                        </Grid>
                );

        return (
                <Grid container spacing={1}>
                        <Grid xs={8} item className="flex-center">
                                <Chip
                                        className="max-dimension"
                                        style={{ fontSize: "14px" }}
                                        icon={<FaceIcon />}
                                        label={username}
                                        color="primary"
                                        clickable
                                />
                        </Grid>
                        <Grid xs={4} item container justify="center" alignItems="center">
                                <InputButton StartIcon={<Close />} color="secondary" onClick={handleOnLogout} label="Logout" />
                        </Grid>
                </Grid>
        );
};

export default AuthUser;

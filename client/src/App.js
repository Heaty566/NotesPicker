import React, { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

function App() {
        useEffect(() => {
                window.gapi.signin2.render("my-signin2", {
                        scope: "profile email",
                        width: 240,
                        height: 50,
                        longtitle: true,
                        theme: "dark",
                });
        }, []);
        return (
                <div className="App">
                        <Grid container className="container">
                                <Grid
                                        item
                                        xs={3}
                                        style={{
                                                minHeight: "100%",
                                                background: "#34495e",
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
                                                />
                                        </Link>

                                        <Grid container>
                                                <Grid xs={8}>
                                                        <button id="my-signin2"></button>
                                                </Grid>
                                                {/* <Grid xs={4}>22</Grid> */}
                                                <Grid xs={4}></Grid>
                                        </Grid>
                                </Grid>
                                <Grid item xs={9}>
                                        test
                                </Grid>
                        </Grid>
                </div>
        );
}

export default App;

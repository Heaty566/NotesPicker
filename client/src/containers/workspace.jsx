import React, { useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import CopyToClipBoard from "react-copy-to-clipboard";
import { formatString } from "../helper/helper";
import soundClick from "../click.mp3";

const WorkSpace = ({ data = [] }) => {
        const handleOnClick = () => {
                const sound = new Audio(soundClick);
                sound.play();
        };

        return (
                <Grid container item className="workspace__container">
                        {data.map((item, index) => {
                                return (
                                        <CopyToClipBoard onCopy={() => handleOnClick(item.data)} key={index} text={item.data}>
                                                <Button
                                                        className="workspace__btn"
                                                        variant="contained"
                                                        color="primary"
                                                        style={{ background: `${item.data}` }}
                                                >
                                                        <Typography variant="h6">{formatString(item.name, 15)}</Typography>
                                                        <Typography variant="body2" style={{ wordBreak: "break-all" }}>
                                                                {formatString(item.data, 50)}
                                                        </Typography>
                                                </Button>
                                        </CopyToClipBoard>
                                );
                        })}
                </Grid>
        );
};

export default WorkSpace;

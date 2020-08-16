import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import CopyToClipBoard from "react-copy-to-clipboard";

import { formatString } from "../helper/helper";

const WorkSpace = ({ data = [], handleOnCopy, copyName }) => {
        return (
                <Grid container item className="workspace__container">
                        {data.map((item, index) => {
                                return (
                                        <CopyToClipBoard onCopy={handleOnCopy} key={index} text={copyName ? item.name : item.data}>
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

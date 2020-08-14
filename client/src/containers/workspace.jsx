import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";

const WorkSpace = ({ data = [] }) => {
        useEffect(() => {
                console.log(data);
        }, [data]);
        return (
                <Grid container item justify="center" alignItems="center">
                        {data.map((item, index) => {
                                return <div key={index}>{item.name}</div>;
                        })}
                        ;
                </Grid>
        );
};

export default WorkSpace;

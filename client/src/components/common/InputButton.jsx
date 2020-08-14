import React from "react";
import { Button } from "@material-ui/core";

const InputButton = ({ StartIcon, label, ...rest }) => {
        return (
                <Button {...rest} variant="contained" startIcon={StartIcon}>
                        {label}
                </Button>
        );
};

export default InputButton;

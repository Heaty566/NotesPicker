import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { FormContext } from "../../containers/Controller";

const Input = ({ label, ...rest }) => {
        const { control } = useContext(FormContext);

        return (
                <Controller
                        control={control}
                        {...rest}
                        as={<TextField variant="standard" label={label} size="small" className="max-dimension" />}
                />
        );
};

export default Input;

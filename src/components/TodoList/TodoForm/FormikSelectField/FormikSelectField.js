import React from 'react';
import {  useFormikContext } from "formik";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        margin: "20px 0px"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function FormikSelectField (props) {
    const { values, handleChange, handleBlur } = useFormikContext()
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Status:</InputLabel>
            <Select
                {...props}
                native
                value={values[props.name]}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option value={true}>Done</option>
                <option value={false}>Not done</option>
            </Select>
        </FormControl>
    );
}

export default FormikSelectField;
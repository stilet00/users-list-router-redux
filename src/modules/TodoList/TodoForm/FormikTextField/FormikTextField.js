import React from "react";
import { TextField } from "@material-ui/core";
import { useFormikContext } from "formik";

function FormikTextField(props) {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormikContext();
  return (
    <>
      <TextField
        {...props}
        error={touched[props.name] && !!errors[props.name]}
        helperText={touched[props.name] && errors[props.name]}
        variant="outlined"
        value={values[props.name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
}

export default FormikTextField;

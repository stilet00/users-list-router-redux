import React from "react";
import Button from "@material-ui/core/Button";
import { useFormikContext } from "formik";

function FormikButton({ children, ...props }) {
  const { isValid } = useFormikContext();
  return (
    <Button {...props} disabled={!isValid}>
      {children}
    </Button>
  );
}

export default FormikButton;

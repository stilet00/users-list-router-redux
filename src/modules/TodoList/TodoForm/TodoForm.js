import React from "react";
import { Button, FormGroup } from "@material-ui/core";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
import { addTodo } from "../../../store/todos/thunks";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import FormikTextField from "./FormikTextField/FormikTextField";
import FormikSelectField from "./FormikSelectField/FormikSelectField";
import { useTodosForm } from "./hooks/hooks";
import FormikButton from "./FormikButton/FormikButton";

function TodoForm({ addTodo }) {
  const history = useHistory();
  const { validate } = useTodosForm();
  return (
    <Formik
      initialValues={{ title: "", isDone: false }}
      onSubmit={(values) => {
        addTodo(values);
        history.push("/todos");
      }}
      validate={validate}
    >
      <Form>
        <FormGroup className={"container"}>
          <FormikTextField
            name={"title"}
            placeholder={"Enter title"}
            label={"Title"}
            type={"text"}
          />
          <FormikSelectField name={"isDone"} label={"Status:"} />
          <FormikButton variant="contained" type={"submit"}>
            <SaveRoundedIcon />
          </FormikButton>
          <Button variant="contained" type={"button"}>
            <Link to={"/todos"} className={"button-inner"}>
              <CloseIcon />
            </Link>
          </Button>
        </FormGroup>
      </Form>
    </Formik>
  );
}
const mapStateToProps = ({ todos }) => ({ todos: todos.todos });
const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => dispatch(addTodo(newTodo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

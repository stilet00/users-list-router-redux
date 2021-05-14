import React, { useCallback, useState } from 'react';
import { FormControl, FormGroup, InputLabel, Select, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import CloseIcon from '@material-ui/icons/Close';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { addTodo } from "../../../store/todos/thunks";
import { connect } from "react-redux";
import { Formik } from 'formik';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function TodoForm ({  addTodo }) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Formik initialValues={{title: '', isDone: false}} onSubmit={(values) => {
            addTodo(values);
            history.push('todos/')
        } }>
            { (formik) => { return (
                <form action="" onSubmit={formik.handleSubmit}>
                    <FormGroup className={"container"}>
                        <TextField id="outlined-basic" label="Title:" variant="outlined" type="text"
                                   value={formik.values.title}
                                   name={"title"}
                                   onChange={formik.handleChange}
                        />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Status:</InputLabel>
                            <Select
                                native
                                value={formik.values.isDone}
                                onChange={formik.handleChange}
                                label="Status:"
                                name={'isDone'}
                            >
                                <option value={true}>Done</option>
                                <option value={false}>Not done</option>
                            </Select>
                        </FormControl>
                        <Button variant="contained" type={"submit"} disabled={!formik.isValid}>
                            <SaveRoundedIcon />
                        </Button>
                        <Button variant="contained" type={"button"}>
                            <Link to={"/todos"} className={"button-inner"}>
                                <CloseIcon />
                            </Link>
                        </Button>
                    </FormGroup>
                </form>
            )}
            }
        </Formik>
    );
}
const mapStateToProps = ({ todos }) => ({ todos: todos.todos });
const mapDispatchToProps = (dispatch) => ({
    addTodo: (newTodo) => dispatch(addTodo(newTodo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
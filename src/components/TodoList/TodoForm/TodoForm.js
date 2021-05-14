import React, { useCallback, useState } from 'react';
import { FormControl, FormGroup, InputLabel, Select, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { makeStyles } from "@material-ui/core/styles";
import { addTodo } from "../../../store/todos/thunks";
import { connect } from "react-redux";
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
    const [todo, setTodo] = useState({title: '', isDone: false});
    let onInputChange = useCallback(
        (e) => {
            setTodo({ ...todo, [e.target.name]: e.target.value.trim() });
        },
        [todo, setTodo]
    );
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            addTodo(todo);
            history.push("/todos");
        }
        }>
            <FormGroup className={"container"}>
                <TextField id="outlined-basic" label="Title:" variant="outlined" type="text"
                           value={todo.title}
                           name={"title"}
                           onChange={onInputChange}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Status:</InputLabel>
                    <Select
                        native
                        value={todo.isDone}
                        onChange={(e) => setTodo({...todo, isDone: e.target.value})}
                        label="Status:"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={true}>Done</option>
                        <option value={false}>Not done</option>
                    </Select>
                </FormControl>
                <Button variant="contained" type={"submit"}>
                    <SaveRoundedIcon />
                </Button>
                <Button variant="contained" type={"button"}>
                    <Link to={"/todos"} className={"button-inner"}>
                        <ArrowBackRoundedIcon />
                    </Link>
                </Button>
            </FormGroup>
        </form>
    );
}
const mapStateToProps = ({ todos }) => ({ todos: todos.todos });
const mapDispatchToProps = (dispatch) => ({
    addTodo: (newTodo) => dispatch(addTodo(newTodo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
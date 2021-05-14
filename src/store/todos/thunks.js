import { add, edit, get, remove } from "../../services/todoServices";
import { change, create, set, removal } from "../todos/actions";

export const fetchTodos = () => (dispatch) => {
  get().then(({ data }) => dispatch(set(data)));
};

export const deleteTodo = (todoId) => (dispatch) => {
  remove(todoId).then((res) => dispatch(removal(todoId)));
};
export const addTodo = (newTodo) => (dispatch) => {
  add(newTodo).then(({ data }) => dispatch(create(data)));
};

export const changeStatus = (editedTodo) => (dispatch) => {
  edit(editedTodo).then(res => dispatch(change(editedTodo)))
};

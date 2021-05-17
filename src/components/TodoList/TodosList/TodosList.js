import React from 'react';
import { deleteTodo, fetchTodos, changeStatus } from "../../../store/todos/thunks";
import { connect } from "react-redux";
import { useTodos } from "./hooks";
import { useLazyLoading } from "../../../common/hooks";
import SingleTodo from "../SingleTodo/SingleTodo";
import "../TodosList/TodosList.css"
import TodoForm from "../TodoForm/TodoForm";
import { useRouteMatch } from "react-router-dom";

function TodosList ({todos, deleteTodo, fetchTodos, changeStatus}) {
    const { handleScroll, currentRender } = useLazyLoading(todos)
    useTodos(fetchTodos)
    const { path } = useRouteMatch()
    const modal = path === '/todos/add' ? <div className="modal"><TodoForm /></div> : null
    return (
        <div className={"users-list container"}>
            <div className={"todos-container"} onScroll={handleScroll}>
                {todos.slice(0, currentRender).map((item) => (
                    <SingleTodo
                        key={item.id}
                        todo={item}
                        onDelete={(id) => deleteTodo(id)}
                        onChange={(id) => changeStatus(id)}
                    />
                ))}
            </div>
            {modal}
        </div>
    );
}
const mapStateToProps = ({ todos }) => ({ todos: todos.todos });
const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
    changeStatus: (editedTodo) => dispatch(changeStatus(editedTodo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
import React from "react";
import { Button } from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import "./SingleTodo.css";
function SingleTodo({ todo, onDelete, onChange }) {
  const icon = todo.isDone ? <CancelIcon /> : <CheckIcon />;
  return (
    <div
      className={
        "todo-card" +
        " " +
        (todo.isDone ? "todos-card-completed" : "todos-card-not-completed")
      }
    >
      <p>{todo.title}</p>
      <div className={"control-buttons todos-buttons"}>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
        >
          <DeleteRoundedIcon />
        </Button>
        <Button
          variant="contained"
          color={todo.isDone ? "primary" : "secondary"}
          onClick={(e) => {
            e.stopPropagation();
            onChange({ ...todo, isDone: !todo.isDone });
          }}
        >
          {icon}
        </Button>
      </div>
    </div>
  );
}

export default SingleTodo;

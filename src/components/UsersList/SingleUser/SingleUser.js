import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import "./SingleUser.css";
function SingleUser({name, email, phone, id, onDelete}) {
  const { path } = useRouteMatch();
  return (
    <div className={"user-card"}>
      <Link to={path + id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </Link>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        <DeleteRoundedIcon />
      </Button>
    </div>
  );
}

export default SingleUser;

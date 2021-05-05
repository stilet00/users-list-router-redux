import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import './SingleUser.css'
function SingleUser (props) {
    const { path } = useRouteMatch();
    return (
        <div className={"user-card"} >
            <Link to={path + props.id}>
                <p>{props.name}</p>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </Link>
            <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {e.stopPropagation(); props.onDelete(props.id)}}
            >
                DELETE
            </Button>
        </div>
    );
}

export default SingleUser;
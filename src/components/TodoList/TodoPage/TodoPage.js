import React from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import TodosList from "../TodosList/TodosList";
import { Button } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";

function TodoPage (props) {
    const { path } = useRouteMatch();
    return (
        <>
        <div className={"control-buttons"}>
            <Button variant="contained" color="primary" className={"back-button"}>
                <Link to="/" className={"button-inner"}>
                    <ArrowBackRoundedIcon />
                </Link>
            </Button>
            <Button variant="contained" color="primary" className={"back-button"}>
                <Link to={path + "/add"} className={"button-inner"}>
                    <AddBoxRoundedIcon />
                </Link>
            </Button>
        </div>
        <Switch>
            <Route path={path + "/"} exact component={TodosList} />
            <Route path={path + "/add"} component={TodosList} />
        </Switch>
        </>
    );
}

export default TodoPage;
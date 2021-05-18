import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "../../Form/Form";
import UsersList from "../UsersList/UsersList";
import { Button } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";

function UserPage(props) {
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
          <Link to="/form" className={"button-inner"}>
            <AddBoxRoundedIcon />
          </Link>
        </Button>
      </div>
      <Switch>
        <Route path={path + "/"} exact component={UsersList} />
        <Route path={path + "/:id"} component={Form} />
      </Switch>
    </>
  );
}

export default UserPage;

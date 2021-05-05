import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "../../Form/Form";
import UsersList from "../UsersList/UsersList";

function UserPage(props) {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path + "/"} exact component={UsersList} />
      <Route path={path + "/:id"} component={Form} />
    </Switch>
  );
}

export default UserPage;

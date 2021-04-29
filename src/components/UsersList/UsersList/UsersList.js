import React from 'react';
import { connect } from "react-redux";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import Form from "../../Form/Form";
import SingleUser from "../SingleUser/SingleUser";
import './UserList.css'

function UsersList ({users}) {
    const { path } = useRouteMatch();
    return (
        <div className={"users"}>
            <div className={"control-buttons"}>
                <Button variant="contained" color="primary">
                    <Link to="/" className={"button-inner"}>
                        Back
                    </Link>
                </Button>
            </div>
            <div className={"users-container"}>
                {users.map(item => <SingleUser key={item.id} {...item}/>)}
            </div>
            <Switch>
                <Route path={path + "/:id"} component={Form} />
            </Switch>
        </div>
    );
}
function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps)(UsersList);
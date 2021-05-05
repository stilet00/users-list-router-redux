import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SingleUser from "../SingleUser/SingleUser";
import "./UserList.css";
import { deleteUser, fetchUsers } from "../../../store/Users/thunks";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

function UsersList({ users, deleteUser, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className={"users-list container"}>
      <div className={"control-buttons"}>
        <Button variant="contained" color="primary" className={'back-button'}>
          <Link to="/" className={"button-inner"}>
            <ArrowBackRoundedIcon />
          </Link>
        </Button>
        <Button variant="contained" color="primary" className={'back-button'}>
           <Link to="/form" className={"button-inner"}><AddBoxRoundedIcon /></Link>
        </Button>
      </div>
      <div className={"users-container"}>
        {users.map((item) => (
          <SingleUser
            key={item.id}
            {...item}
            onDelete={(id) => deleteUser(id)}
          />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = ({ users }) => ({ users: users.users });
const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(deleteUser(id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

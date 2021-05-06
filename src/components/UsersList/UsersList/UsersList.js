import React from "react";
import { connect } from "react-redux";
import { usePagination } from "./hooks";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SingleUser from "../SingleUser/SingleUser";
import "./UserList.css";
import { deleteUser, fetchUsers } from "../../../store/users/thunks";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import {  ArrowForwardRounded } from "@material-ui/icons";

function UsersList({ users, deleteUser, fetchUsers }) {
    const { handleFow, handlePrev, currentPage, firstBorder, secondBorder } = usePagination(fetchUsers)
    let back = firstBorder === 0 ? null : ( <Button variant="outlined" color="primary" className={"back-button"} onClick={handlePrev}>
        <ArrowBackRoundedIcon />
    </Button>)
    let forward = users.length - secondBorder < 3 ? null : (<Button variant="outlined" color="primary" className={"back-button"} onClick={handleFow}>
        <ArrowForwardRounded />
    </Button>)
  return (
    <div className={"users-list container"}>
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
      <div className={"users-container"}>
        {users.slice(firstBorder, secondBorder).map((item) => (
          <SingleUser
            key={item.id}
            {...item}
            onDelete={(id) => deleteUser(id)}
          />
        ))}
      </div>
        <div className={"control-buttons"}>
            {back}
            {currentPage}
            {forward}
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

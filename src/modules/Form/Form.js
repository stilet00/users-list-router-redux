import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { addUser, editUser } from "../../store/users/thunks";
import { useForm } from "./hooks";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";

function Form({ users, addUser, editUser }) {
  const { onInputChange, saveCont, user } = useForm(users, addUser, editUser);
  return (
    <form action="" onSubmit={saveCont}>
      <FormGroup className={"container"}>
        <input
          type="text"
          value={user.name}
          name={"name"}
          onChange={onInputChange}
        />
        <input
          type="email"
          value={user.email}
          name={"email"}
          onChange={onInputChange}
        />
        <input
          type="tel"
          value={user.phone}
          name={"phone"}
          onChange={onInputChange}
        />
        <Button variant="contained" type={"submit"}>
          <SaveRoundedIcon />
        </Button>
        <Button variant="contained" type={"button"}>
          <Link to={"/users"} className={"button-inner"}>
            <ArrowBackRoundedIcon />
          </Link>
        </Button>
      </FormGroup>
    </form>
  );
}

const mapStateToProps = ({ users }) => ({ users: users.users });
function mapDispatchToProps(dispatch) {
  return {
    addUser: (user) => dispatch(addUser(user)),
    editUser: (user) => dispatch(editUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

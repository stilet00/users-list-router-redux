import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { addUser, editUser } from "../../store/Users/thunks";
import { useForm } from "./hooks";

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
          Save
        </Button>
        <Button variant="contained" type={"button"}>
          <Link to={"/Users"} className={"button-inner"}>
            Back
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

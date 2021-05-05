import React, { useCallback, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FormGroup } from "@material-ui/core";
import { DEFAULT_USER } from "../../constants/Constants";
import { addUser, editUser } from "../../store/Users/actions";

function Form ({users, addUser, editUser }) {
    const history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState(users.find(item => id === item.id) ||  DEFAULT_USER)
    let onInputChange = useCallback(
        (e) => {
            setUser({ ...user, [e.target.name]: e.target.value.trim() });
        },
        [user, setUser]
    );
    function saveCont(e) {
        e.preventDefault()
        if (user.id) {
            editUser(user)
            history.push("/Users")

        } else {
            addUser(user)
            history.push("/Users")
        }

    }
    return (
        <form action="" onSubmit={saveCont}>
        <FormGroup className={'container'}>
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
const mapStateToProps = ({ users }) => ({users: users.users});
function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user)),
        editUser: (user) => dispatch(editUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
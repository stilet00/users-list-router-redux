import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Form ({users}) {

    const { id } = useParams();
    const user = users.find(item => id === item.id)
    return (
        <div>FORM {user.id} {user.name}</div>
    );
}
function mapStateToProps(state) {
    return { users: state.users };
}
export default connect(mapStateToProps)(Form);
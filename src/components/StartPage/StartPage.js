import React from 'react';
import { Link } from "react-router-dom";

function StartPage (props) {
    return (
        <>
            <Link to="/users/">
                Users
            </Link>
            <Link to="/form">
                Add
            </Link>
        </>
    );
}

export default StartPage;
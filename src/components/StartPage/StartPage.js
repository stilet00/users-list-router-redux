import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";
import Button from "@material-ui/core/Button";
function StartPage(props) {
  return (
    <div className={"header"}>
      <Button variant="outlined" type={"button"}>
        <Link to="/users/">Users list</Link>
      </Button>
        <Button variant="outlined" type={"button"}>
            <Link to="/todos/">Todos list</Link>
        </Button>
    </div>
  );
}

export default StartPage;

import React from "react";
import { Link } from "react-router-dom";
import exit from "../Assets/exit.png";

export default function ExitButton(props) {
  return (
    <button onClick={props.clicked} className="exitbtn">
      <Link to="/">
        <img src={exit} alt="close" width="10px" />
      </Link>
    </button>
  );
}

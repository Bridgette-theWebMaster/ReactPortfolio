import React from "react";
import { useHistory } from "react-router-dom";
import back from "../Assets/back.png";

export default function BackButton(props) {
  let history = useHistory();

  return (
    <button
      onClick={(e) => {
        history.goBack();
      }}
      className="backbtn"
    >
      <img src={back} alt="back" width="15px" />
    </button>
  );
}

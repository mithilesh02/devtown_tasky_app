import React from "react";
import "./PrimaryButton.css";

import assets from "../../../assets";

const PrimaryButton = ({ onClick }) => {
  return (
    <button className="primaryButtonContainer" onClick={onClick}>
      <img src={assets.add} alt="add" />
    </button>
  );
};

export default PrimaryButton;

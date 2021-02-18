import React from "react";
import "./CustomDisplay.css";
const CustomDisplay = (props) => {
  return <div className="CustomDisplay">{props.value}</div>;
};

export default CustomDisplay;

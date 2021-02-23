import React from "react";
import "./CustomTriangleButton.css";
export const CustomTriangleUpButton = (props) => {
  const disabled = props.disabled;
  return (
    <button
      className="Button"
      onClick={props.handleIncrement}
      disabled={disabled ? true : null}
    >
      {" "}
      <i className="fas fa-caret-up fa-5x Triangle" id={props.id}></i>
    </button>
  );
};

export const CustomTriangleDownButton = (props) => {
  const disabled = props.disabled;
  return (
    <button
      className="Button"
      onClick={props.handleDecrement}
      disabled={disabled ? true : null}
    >
      <i className="fas fa-caret-down fa-5x Triangle" id={props.id}></i>
    </button>
  );
};

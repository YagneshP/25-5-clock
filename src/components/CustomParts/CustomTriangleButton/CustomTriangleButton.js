import React from "react";
import "./CustomTriangleButton.css";
export const CustomTriangleUpButton = (props) => {
  return<button className="Button" onClick={props.handleIncrement}> <i className="fas fa-caret-up fa-5x Triangle" id={props.id}></i></button>;
};

export const CustomTriangleDownButton = (props) => {
  return <button className="Button" onClick={props.handleDecrement}><i className="fas fa-caret-down fa-5x Triangle" id={props.id}></i></button>;
};

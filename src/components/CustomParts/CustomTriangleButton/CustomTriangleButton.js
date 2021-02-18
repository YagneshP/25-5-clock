import React from "react";
import "./CustomTriangleButton.css";
export const CustomTriangleUpButton = (props) => {
  return <i className="fas fa-caret-up fa-5x Triangle" id={props.id}></i>;
};

export const CustomTriangleDownButton = (props) => {
  return <i className="fas fa-caret-down fa-5x Triangle" id={props.id}></i>;
};

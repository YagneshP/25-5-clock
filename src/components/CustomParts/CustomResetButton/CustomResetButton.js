import React, { useState } from "react";
import "./CustomResetButton.css";
import { Spring } from "react-spring/renderprops";
import {useMediaQuery} from "../../../util/useMedia"
const CustomResetButton = (props) => {
  const{handleReset,id,play} = props
	const media = useMediaQuery('(max-width:600px)')
  return (
    <Spring
      from={!media?{ transform: "translate(0px, 0px) rotate(45deg)", height: "51px" }:{transform: "translate(0px, 0px) rotate(45deg)", height: "40px"}}
      to={!media?{ transform: "translate(-10px, 17px)rotate(45deg)", height: "31px" }:{ transform: "translate(0px, 8px)rotate(45deg)", height: "31px" }}
			reset={true}
			reverse={true}
    >
      {(animationStyle) => (
        <button
          style={props.reset? animationStyle : null}
          className="CustomResetButton"
          onClick={handleReset}
					id={id}
        ></button>
      )}
    </Spring>
  );
};

export default CustomResetButton;

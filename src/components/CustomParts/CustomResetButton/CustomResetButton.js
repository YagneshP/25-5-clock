import React, { useState } from "react";
import "./CustomResetButton.css";
import { Spring } from "react-spring/renderprops";

const CustomResetButton = (props) => {
  const [animation, setAnimation] = useState(false);
  const handleClick = () => {
    setAnimation(!animation);
    props.setReset(!props.reset);
    props.setPlay(false);
    props.breakDispatch({ type: "resetBreak", payload: props.intialBreak });
    props.sessionDispatch({
      type: "resetSession",
      payload: props.intialSession,
    });
  };
  return (
    <Spring
      from={{ transform: "translate(0px, 0px) rotate(45deg)", height: "50px" }}
      to={{ transform: "translate(-10px, 17px)rotate(45deg)", height: "31px" }}
    >
      {(animationStyle) => (
        <button
          style={animation ? animationStyle : null}
          className="CustomResetButton"
          onClick={handleClick}
        ></button>
      )}
    </Spring>
  );
};

export default CustomResetButton;

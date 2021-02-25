import React, { useState } from "react";
import "./CustomPlayButton.css";
import { Spring } from "react-spring/renderprops";
const CustomPlayButton = (props) => {
  const [animation, setAnimation] = useState(false);
  const handleClick = () => {
    setAnimation(!animation);
    props.setPlay(!props.play);
		props.setReset(false);
  };
  return (
    <Spring
      from={{ transform: "translate(0px, 0px) rotate(315deg)", height: "50px" }}
      to={{ transform: "translate(10px, 17px)rotate(315deg)", height: "31px" }}

    >
      {(props) => (
        <button
          style={animation ? props : null}
          onClick={handleClick}
          className="CustomPlayButton"
        ></button>
      )}
    </Spring>
  );
};

export default CustomPlayButton;

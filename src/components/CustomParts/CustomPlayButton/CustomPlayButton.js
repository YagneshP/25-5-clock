import React from "react";
import "./CustomPlayButton.css";
import{ animated }from "react-spring"
const CustomPlayButton = (props) => {
  return(
		<animated.div style={props.anime} className="CustomPlayButton"></animated.div>
);
};

export default CustomPlayButton;

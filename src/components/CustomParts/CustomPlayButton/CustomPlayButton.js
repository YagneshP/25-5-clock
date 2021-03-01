import React, { useState } from "react";
import "./CustomPlayButton.css";
import { Spring } from "react-spring/renderprops";
import {useMediaQuery} from "../../../util/useMedia"

const CustomPlayButton = (props) => {
  const { handlePlay, id , play} = props;
	const media = useMediaQuery('(max-width:600px)')

  return (
    <Spring

      from={!media?{ transform: "translate(0px, 0px) rotate(315deg)", height: "50px" }:{ transform: "translate(0px, 0px) rotate(315deg)", height: "40px" }} 
      to={!media?{ transform: "translate(10px, 17px)rotate(315deg)" , height: "31px"}:{ transform: "translate(3px, 8px)rotate(315deg)" , height: "31px"}}
		
    >
      {(animeProps) => (
        <button
          style={play ? animeProps : null}
          onClick={handlePlay}
          className="CustomPlayButton"
          id={id}
        ></button>
      )}
    </Spring>
  );
};

export default CustomPlayButton;

import React from "react";

import { secondsToTime } from "../../util/settimer";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
const Timer = (props) => {
  return (
    <div
      className="Timer"
    >
			<div><CustomDisplay id="time-left" value={secondsToTime(props.time)}/></div> 
      <h3 className="Label" id="timer-label">
        {props.label}
      </h3>
    </div>
  );
};

export default Timer;


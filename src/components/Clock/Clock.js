import React from "react";
import Break from "../Break/Break";

import CustomPlayButton from "../CustomParts/CustomPlayButton/CustomPlayButton";
import CustomResetButton from "../CustomParts/CustomResetButton/CustomResetButton";
import Session from "../Session/Session";
import Timer from "../Timer/Timer";

import "./Clock.css";
const Clock = () => {
  return (
    <div className="Clock">
      <CustomPlayButton />
			<CustomResetButton/>
      <div style={{ display: "flex" }}>
        <Break value={5} />
        <Session value={25} />
      </div>
      <Timer />
    </div>
  );
};

export default Clock;

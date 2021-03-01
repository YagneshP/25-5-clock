import React, { useState } from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import {
  CustomTriangleUpButton,
  CustomTriangleDownButton,
} from "../CustomParts/CustomTriangleButton/CustomTriangleButton";

const Session = (props) => {
  const {
    handleSessionIncrement,
    handleSessionDecrement,
    play,
    session,
  } = props;

  return (
    <div
      id="session-label"
      style={{ flexDirection: "column"}}
			className="Container"
    >
      <div className="Container" >
        <CustomTriangleUpButton
          id="session-increment"
          handleIncrement={handleSessionIncrement}
          disabled={play}
        />
        <div style={{ width: 100 }}>
          <CustomDisplay value={session} />
        </div>
        <CustomTriangleDownButton
          id="session-decrement"
          handleDecrement={handleSessionDecrement}
          disabled={play}
        />
      </div>
      <h3 className="Label">Session-Length</h3>
    </div>
  );
};

export default Session;

import React, { useState } from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import {
  CustomTriangleUpButton,
  CustomTriangleDownButton,
} from "../CustomParts/CustomTriangleButton/CustomTriangleButton";

const Break = (props) => {
  const { handleBreakDecrement, handleBreakIncrement, breakTime, play } = props;
  return (
    <div
      id="break-label"
      style={{flexDirection: "column"}}
			className="Container"
    >
      <div className="Container">
        <CustomTriangleUpButton
          id="break-increment"
          handleIncrement={handleBreakIncrement}
          disabled={play}
        />
        <div style={{ width: 100 }} id="break-length">
          <CustomDisplay value={breakTime} />
        </div>
        <CustomTriangleDownButton
          id="break-decrement"
          handleDecrement={handleBreakDecrement}
          disabled={play}
        />
      </div>
      <h3 className="Label">Break-Length</h3>
    </div>
  );
};

export default Break;

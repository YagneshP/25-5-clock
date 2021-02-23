import React, { useState } from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import {
  CustomTriangleUpButton,
  CustomTriangleDownButton,
} from "../CustomParts/CustomTriangleButton/CustomTriangleButton";

const Break = (props) => {
  const { state, dispatch, play } = props;
  const handleIncrement = () => {
    if (state.break < 60) {
      dispatch({ type: "incBreak" });
    }
  };
  const handleDecrement = () => {
    if (state.break > 1) {
      dispatch({ type: "decBreak" });
    }
  };
  return (
    <div
      id="break-label"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: 250,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 250,
          alignItems: "center",
        }}
      >
        <CustomTriangleUpButton
          id="break-increment"
          handleIncrement={handleIncrement}
          disabled={play}
        />
        <div style={{ width: 100 }} id="break-length">
          <CustomDisplay value={state.break} />
        </div>
        <CustomTriangleDownButton
          handleDecrement={handleDecrement}
          id={"break-decrement"}
          disabled={play}
        />
      </div>
      <h3 style={{ color: "white", fontSize: 24 }}>Break-Length</h3>
    </div>
  );
};

export default Break;

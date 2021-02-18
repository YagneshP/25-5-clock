import React from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import {
  CustomTriangleUpButton,
  CustomTriangleDownButton,
} from "../CustomParts/CustomTriangleButton/CustomTriangleButton";

const Session = (props) => {
  return (
    <div
      id="session-label"
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
        <CustomTriangleUpButton id={"session-increment"} />
        <CustomDisplay value={props.value} />
        <CustomTriangleDownButton id={"session-decrement"} />
      </div>
      <h3 style={{ color: "white", fontSize: 24 }}>Session-Length</h3>
    </div>
  );
};

export default Session;

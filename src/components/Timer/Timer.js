import React from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";

const Timer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CustomDisplay style={{ width: 300 }} />
      <h3 style={{ color: "white", fontSize: 24 }}>Session:Break</h3>
    </div>
  );
};

export default Timer;

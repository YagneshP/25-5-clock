import React from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";

const Timer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column",width: 300, textAlign:"center" }}>
      <CustomDisplay value={"25:00"} />
      <h3 style={{ color: "white", fontSize: 24 }}>Session:Break</h3>
    </div>
  );
};

export default Timer;

import React,{useState} from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import {
  CustomTriangleUpButton,
  CustomTriangleDownButton,
} from "../CustomParts/CustomTriangleButton/CustomTriangleButton";

const Session = (props) => {
const{state, dispatch,play} = props
	const	handleIncrement= () =>{
			if(state.session < 60){
				dispatch({type:"incSession"})
			}
		}
		const	handleDecrement= () =>{
			if(state.session > 1){
				dispatch({type:"decSession"})
			}
		}
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
        <CustomTriangleUpButton id={"session-increment"} handleIncrement={handleIncrement} disabled={play}/>
        <div style={{width:100}}><CustomDisplay value={state.session} /></div>
        <CustomTriangleDownButton id={"session-decrement"} handleDecrement={handleDecrement} disabled={play}/>
      </div>
      <h3 style={{ color: "white", fontSize: 24 }}>Session-Length</h3>
    </div>
  );
};

export default Session;

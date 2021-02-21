import React, { useReducer } from "react";
import Break from "../Break/Break";
import CustomPlayButton from "../CustomParts/CustomPlayButton/CustomPlayButton";
import CustomResetButton from "../CustomParts/CustomResetButton/CustomResetButton";
import Session from "../Session/Session";
import Timer from "../Timer/Timer";
import {useSpring} from "react-spring"
import "./Clock.css";
const Clock = () => {
	const anime = useSpring({transform:"translate(-10px, 17px)rotate(45deg)",height:"31px",delay:4000  ,from:{transform:"translate(0px, 0px) rotate(45deg)",height:"50px"}})
	const animePlay = useSpring({transform:"translate(10px, 17px)rotate(315deg)",height:"31px",delay:2000  ,from:{transform:"translate(0px, 0px) rotate(315deg)",height:"50px"}})
  //breakReducer	
let intialBreak = 5;
function breakInit(intialBreak){
	return {break : intialBreak}
}
const breakReducer = (state,action) =>{
	switch (action.type) {
		case "incBreak":
			return {break: state.break + 1 }
		case "decBreak":
			return {break: state.break - 1}
		case "resetBreak":
			return breakInit(action.payload)
		default:
			throw new Error()
	}
}
const[breakState,breakDispatch] =  useReducer(breakReducer, intialBreak, breakInit);



  //sessionReducer	
	let intialSession = 25;
	function sessionInit(intialSession){
		return {session: intialSession}
	}
	const sessionReducer = (state,action) =>{
		switch (action.type) {
			case "incSession":
				return {session: state.session+1}
			case "decSession":
				return {session: state.session-1}
			case "resetSession":
				return sessionInit(action.payload)
			default:
				throw new Error()
		}
	}
	const[sessionState,sessionDispatch] =  useReducer(sessionReducer, intialSession, sessionInit)
	return (
    <div className="Clock">
      <CustomPlayButton anime={animePlay} />
			<CustomResetButton anime={anime}/>
			<h3 style={{color:"white", fontSize:"36px"}}>25:5 CLOCK</h3>
      <div style={{ display: "flex" }}>
        <Break state={breakState} dispatch = {breakDispatch}/>
        <Session state={sessionState} dispatch={sessionDispatch}/>
      </div>
      <Timer break={breakState} session={sessionState}/>
    </div>
  );
};

export default Clock;

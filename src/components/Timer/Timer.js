import React, { useState,useEffect,useRef, useReducer} from "react";
// import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import useInterval from "../../util/useInterval"
import {secondsToTime} from "../../util/settimer";
const Timer = (props) => {
	const audioRef = React.useRef(null);
	const[sessionRunning, setSessionRunning] = React.useState(true)
	const[displaySession, setDisplaySession] = React.useState(null);
	const[displayBreak, setDisplayBreak] = React.useState(null);
	const[time, setTime] = React.useState(null)
	
	React.useEffect(()=>{
		setDisplaySession((props.session.session*60*1000)-1000)
		setDisplayBreak((props.break.break*60*1000)-1000);
		setTime(props.session.session*60*1000)
	 if(props.reset){
		props.setLabel("Session")
	 setSessionRunning(true)
	 audioRef.current.pause()
	 audioRef.current.currentTime = 0
	 }
 },[props.session.session, props.break.break,props.reset])


	useEffect(()=>{
    if(secondsToTime(time) === "00:00" && props.play){
		  audioRef.current.play()
	    setSessionRunning(!sessionRunning)
	   }
  },[time])

  useInterval(()=>{
    if(sessionRunning === true && secondsToTime(time) !== "00:00" && props.play && !props.reset ){
        setDisplaySession(prevSes=> prevSes - 1000 )
        setTime(displaySession)
      }
    else if(sessionRunning === false && secondsToTime(time) !== "00:00" && props.play  && !props.reset  ){
        setDisplayBreak(prevBreak=> prevBreak - 1000)
        setTime(displayBreak)
	    }
    else if(secondsToTime(time) === "00:00" && props.play){
      sessionRunning? props.setLabel("Session"):props.setLabel("Break")
      sessionRunning? setDisplaySession((props.session.session*60*1000)-1000):setDisplayBreak((props.break.break*60*1000)-1000)
      sessionRunning? setTime(props.session.session*60*1000):setTime(props.break.break*60*1000)
	}
}, props.play ? 1000 : null, props.reset)
	
	
	
	
	return (
			<div style={{ display: "flex", flexDirection: "column",width: 300, textAlign:"center" }}>
				<div className="CustomDisplay" id="time-left">{secondsToTime(time)}</div>
				<h3 style={{ color: "white", fontSize: 24 }} id="timer-label">{props.label}</h3>
				<audio id="beep" ref={audioRef} ><source src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></source> </audio>
			</div>
		);
	};
	
	

export default Timer;



// const [sessionRunning, setSessionRunning] = useState(true);
// const [session,setSession] = useState(props.session.session*60*1000);
// const [displaySession,setDisplaySession] = useState(secondsToTime(props.session.session*60*1000))
// const [displayBreakSession, setDisplayBreakSession] = useState(secondsToTime(props.break.break*60*1000))
// const [breakSession,setBreakSession] = useState(props.break.break*60*1000);
// const audioRef = useRef();
// useEffect(()=>{
// 		setSession(props.session.session*60*1000)
// 		setBreakSession(props.break.break*60*1000)
// 		setDisplaySession(secondsToTime(props.session.session*60*1000))
// 		if(props.reset){
// 			audioRef.current.pause()
// 			setSessionRunning(true)
// 			setDisplaySession(secondsToTime(props.session.session*60*1000))
// 		}
// },[props.reset,props.session.session,props.break.break])

// useEffect(()=>{
// if(sessionRunning){
// 	console.log("sessionRunning",sessionRunning)
// 	setSession(props.session.session*60*1000)
// 	setDisplaySession(secondsToTime(props.session.session*60*1000))
// }
// else{
// 	console.log("sessionRunnning", sessionRunning)
// 	setBreakSession(props.break.break*60*1000)
// 	setDisplayBreakSession(secondsToTime(props.break.break*60*1000))
// }
// }, [sessionRunning])

// useInterval(()=>{
// setSessionRunning(!sessionRunning)
// audioRef.current.play()
// }, sessionRunning ? ((props.session.session*60*1000)+1000):((props.break.break*60*1000)+1000),props.play,props.reset)
// //assigning variable to interval this will substarct at every second
// useInterval(()=>{ 
// if(sessionRunning){
// 	setSession(prevSes=> (prevSes-1000));
// 	setDisplaySession( secondsToTime(session))
// }else{
// 	setBreakSession(brkSes =>(brkSes-1000));
// 	setDisplayBreakSession( secondsToTime(breakSession))
// }
// },1000,props.play,props.reset)
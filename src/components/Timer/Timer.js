import React, { useState,useEffect,useRef} from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import useInterval from "../../util/useInterval"
import {secondsToTime} from "../../util/settimer";
const Timer = (props) => {
	const [sessionRunning, setSessionRunning] = useState(true);
	const [session,setSession] = useState(props.session.session*60*1000);
	const [displaySession,setDisplaySession] = useState(secondsToTime(props.session.session*60*1000))
	const [displayBreakSession, setDisplayBreakSession] = useState(secondsToTime(props.break.break*60*1000))
	const [breakSession,setBreakSession] = useState(props.break.break*60*1000);
const audioRef = useRef();
useEffect(()=>{
			setSession(props.session.session*60*1000)
			setBreakSession(props.break.break*60*1000)
			if(props.reset){
				audioRef.current.pause()
				setSessionRunning(true)
			}
		
},[props.reset,props.session.session, props.break.break])
useEffect(() => {
	if(sessionRunning){
		setDisplaySession( secondsToTime(session))
	}else{
		setDisplayBreakSession( secondsToTime(breakSession))
	}

}, [session,breakSession,sessionRunning])
	//sessionRunning will be false after session complete
useInterval(()=>{
	setSessionRunning(!sessionRunning)
	setSession(props.session.session*60*1000)
	setBreakSession(props.break.break*60*1000)
	audioRef.current.play()
}, sessionRunning ? session:breakSession,props.play, props.reset)

//assigning variable to interval this will substarct at every second
useInterval(()=>{ 
	if(sessionRunning){
		setSession(prevSes=> (prevSes-1000));
	}else{
		setBreakSession(brkSes =>(brkSes -1000));
	}
},1000,props.play,props.reset)


const timerLabel = sessionRunning ? "Session" : "Break"
return (
    <div style={{ display: "flex", flexDirection: "column",width: 300, textAlign:"center" }}>
      <CustomDisplay value={sessionRunning ? `${displaySession.m}:${displaySession.s}` : `${displayBreakSession.m}:${displayBreakSession.s}`} />
      <h3 style={{ color: "white", fontSize: 24 }} id="timer-label">{timerLabel}</h3>
			<audio id="beep" ref={audioRef} ><source src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></source> </audio>
    </div>
  );
};

export default Timer;

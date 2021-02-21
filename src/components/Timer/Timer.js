import React, { useState,useEffect,useRef} from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import useInterval from "../../util/useInterval"
const Timer = (props) => {
	const [sessionRunning, setSessionRunning] = useState(true);
	const [session,setSession] = useState(props.session.session);
	const [breakSession,setBreakSession] = useState(props.break.break);

useInterval(()=>{
	setSessionRunning(!sessionRunning)
}, 26 * 1000)
const sessionInterval = useInterval(()=>{ 
	setSession(session - 1)
},1000)
useEffect(()=>{
	setSession(props.session.session)
	console.log("new", props.session.session)
	console.log("clearing session")
	return () => clearInterval(sessionInterval)
},[sessionRunning,props.session.session])
console.log("sessionRun",sessionRunning);
 return (
    <div style={{ display: "flex", flexDirection: "column",width: 300, textAlign:"center" }}>
      <CustomDisplay value={sessionRunning ? session : breakSession} />
      <h3 style={{ color: "white", fontSize: 24 }}>Session:Break</h3>
    </div>
  );
};

export default Timer;

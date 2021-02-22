import React, { useState,useEffect,useRef} from "react";
import CustomDisplay from "../CustomParts/CustomDisplay/CustomDisplay";
import useInterval from "../../util/useInterval"
const Timer = (props) => {
	const [sessionRunning, setSessionRunning] = useState(true);
	const [session,setSession] = useState(props.session.session);
	const [breakSession,setBreakSession] = useState(props.break.break);

	//sessionRunning will be false after session complete
useInterval(()=>{
	setSessionRunning(!sessionRunning)
	setSession(props.session.session)
	setBreakSession(props.break.break)
}, sessionRunning ? ((session+1) * 1000):((breakSession+1)* 1000),props.play)

//assigning variable to interval this will substarct at every second
useInterval(()=>{ 
	if(sessionRunning){
		setSession(session - 1);
	}else{
		setBreakSession(breakSession -1);
	}
},1000,props.play)

//using effect to cancel interval
// useEffect(()=>{

// 	console.log("new", props.session.session)
// 	console.log("clearing session")
// 	return () => clearInterval(sessionInterval)
// },[sessionRunning,props.session.session])

 return (
    <div style={{ display: "flex", flexDirection: "column",width: 300, textAlign:"center" }}>
      <CustomDisplay value={sessionRunning ? session : breakSession} />
      <h3 style={{ color: "white", fontSize: 24 }}>Session:Break</h3>
    </div>
  );
};

export default Timer;

import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay, play, reset,session) {
  const savedCallback = useRef();
  const savedPlay = useRef();
	const savedReset = React.useRef();
	const savedSession = React.useRef();
 useEffect(() => {
    savedCallback.current = callback;
    savedPlay.current = play;
		savedReset.current = reset
		savedSession.current = session
  }, [callback, play, reset,session]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
	
    if (delay !== null  ) {
			console.log("click changed")
      let id = setInterval(tick, delay);
			if(!reset || session !== savedSession.current){
				return () =>{
					console.log("cleared",id)
					clearInterval(id);
				} 
			}
     
    }
  }, [delay, play, reset,session]);
}


export default useInterval;

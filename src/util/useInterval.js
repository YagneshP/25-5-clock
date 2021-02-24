import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay, play, session) {
  const savedCallback = useRef();
  const savedPlay = useRef();
  const savedSession = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
    savedPlay.current = play;
    savedSession.current = session;
  }, [callback, play, session]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && play) {
			console.log("click changed")
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
		// if (delay !== null && play) {
		// 	console.log("changed delay")
    //   let id = setInterval(tick, delay);
    //   return () => clearInterval(id);
    // }
		if(session !== savedSession && play){
      console.log("session has changed")
        let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, play, session]);
}

export default useInterval;

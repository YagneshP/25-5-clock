import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay, reset) {
  const savedCallback = React.useRef();
  const intervalId = React.useRef(null);
  const clear = React.useCallback(() => clearInterval(intervalId.current), []);
  const savedReset = React.useRef();
// Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
    savedReset.current = reset
  }, [callback, reset]);

// Set up the interval.
  React.useEffect(() => {
    function tick() { 
      savedCallback.current();
    }
   if (intervalId.current) clear();
   if (delay !== null || reset !== savedReset.current ) {
			console.log("click changed")
      intervalId.current = setInterval(tick, delay);
		  return clear;
    }
  }, [delay, clear, reset]);
}

export default useInterval;

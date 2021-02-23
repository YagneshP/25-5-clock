import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay, play, reset) {
  const savedCallback = useRef();
  const savedPlay = useRef();
  const savedReset = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
    savedPlay.current = play;
    savedReset.current = reset;
  }, [callback, play, reset]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && play) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, play, reset]);
}

export default useInterval;

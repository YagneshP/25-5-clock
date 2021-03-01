import React, { useEffect, useRef, useCallback } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  const intervalId = useRef(null);
  const clear = useCallback(() => clearInterval(intervalId.current), []);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (intervalId.current) clear();
    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
      return clear;
    }
  }, [delay, clear]);
}

export default useInterval;

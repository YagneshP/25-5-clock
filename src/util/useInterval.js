import React, { useState,useEffect,useRef} from "react";



function useInterval(callback, delay,reset) {
	const savedCallback = useRef();
	// const savedReset = useRef();
	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
		// savedReset.current = reset
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null ) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default useInterval;
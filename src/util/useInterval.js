import React, { useState,useEffect,useRef} from "react";



function useInterval(callback, delay,play) {
	const savedCallback = useRef();
	const savedPlay = useRef();
	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
		savedPlay.current = play
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		console.log("playInEffect", play)
		if (delay !== null && play) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay,play]);
}

export default useInterval;
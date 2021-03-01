import React from "react";
import Break from "../Break/Break";
import CustomPlayButton from "../CustomParts/CustomPlayButton/CustomPlayButton";
import CustomResetButton from "../CustomParts/CustomResetButton/CustomResetButton";
import Session from "../Session/Session";
import Timer from "../Timer/Timer";
import "./Clock.css";
import useInterval from "../../util/useInterval";
import { secondsToTime } from "../../util/settimer";
const Clock = () => {
  const [breakTime, setBreakTime] = React.useState(5);
  const [session, setSession] = React.useState(25);
  const [play, setPlay] = React.useState(false);
  const [reset, setReset] = React.useState(false);
  const [label, setLabel] = React.useState("Session");
  const [sessionRunning, setSessionRunning] = React.useState(true);
  const [displaySession, setDisplaySession] = React.useState(
    session * 60 * 1000 - 1000
  );
  const [displayBreak, setDisplayBreak] = React.useState(
    breakTime * 60 * 1000 - 1000
  );
  const [time, setTime] = React.useState(session * 60 * 1000);
  const audioRef = React.useRef(null);
  React.useEffect(() => {
    setDisplaySession(session * 60 * 1000 - 1000);
    setDisplayBreak(breakTime * 60 * 1000 - 1000);
    setTime(session * 60 * 1000);
  }, [session, breakTime, reset]);
	React.useEffect(() => {
    if (secondsToTime(time) === "00:00" && play && !reset) {
      audioRef.current.play();
      setSessionRunning(!sessionRunning);
    }
  }, [time, reset]);
  useInterval(
    () => {
      if (
        sessionRunning === true &&
        secondsToTime(time) !== "00:00" &&
        play &&
        !reset
      ) {
        setDisplaySession((prevSes) => prevSes - 1000);
        setTime(displaySession);
      } else if (
        sessionRunning === false &&
        secondsToTime(time) !== "00:00" &&
        play &&
        !reset
      ) {
        setDisplayBreak((prevBreak) => prevBreak - 1000);
        setTime(displayBreak);
      } else if (secondsToTime(time) === "00:00" && play && !reset) {
        sessionRunning ? setLabel("Session") : setLabel("Break");
        sessionRunning
          ? setDisplaySession(session * 60 * 1000 - 1000)
          : setDisplayBreak(breakTime * 60 * 1000 - 1000);
        sessionRunning
          ? setTime(session * 60 * 1000)
          : setTime(breakTime * 60 * 1000);
      }
    },
    play ? 1000 : null
  );

  const handleBreakIncrement = () => {
    if (breakTime < 60) {
      setBreakTime((prevBreak) => prevBreak + 1);
    }
  };
  const handleBreakDecrement = () => {
    if (breakTime > 1) {
      setBreakTime((prevBreak) => prevBreak - 1);
    }
  };

  const handleSessionIncrement = () => {
    if (session < 60) {
      setSession((prevSession) => prevSession + 1);
    }
  };
  const handleSessionDecrement = () => {
    if (session > 1) {
      setSession((prevSession) => prevSession - 1);
    }
  };
  const handlePlay = () => {
    setPlay(!play);
    setReset(false);
  };

  const handleReset = () => {
    setReset(true);
    setPlay(false);
    setBreakTime(5);
    setSession(25);
    setLabel("Session");
    setSessionRunning(true);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setTime(session * 60 * 1000);
  };

  return (
    <div className="Clock">
      <CustomPlayButton handlePlay={handlePlay} reset={reset} play={play} id="start_stop" />
      <CustomResetButton handleReset={handleReset} reset={reset} play={play} id="reset" />
      <h3 className="Title">25:5 CLOCK</h3>
      <div style={{ display: "flex" }}>
        <Break
          handleBreakDecrement={handleBreakDecrement}
          handleBreakIncrement={handleBreakIncrement}
          breakTime={breakTime}
          play={play}
        />
        <Session
          handleSessionIncrement={handleSessionIncrement}
          handleSessionDecrement={handleSessionDecrement}
          play={play}
          session={session}
        />
      </div>
      <Timer time={time} label={label} />
      <audio id="beep" ref={audioRef}>
        <source src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"></source>{" "}
      </audio>
    </div>
  );
};

export default Clock;

import React, { useReducer, useState } from "react";
import Break from "../Break/Break";
import CustomPlayButton from "../CustomParts/CustomPlayButton/CustomPlayButton";
import CustomResetButton from "../CustomParts/CustomResetButton/CustomResetButton";
import Session from "../Session/Session";
import Timer from "../Timer/Timer";
import "./Clock.css";
const Clock = () => {
  const [play, setPlay] = useState(false);
  const [reset, setReset] = useState(false);
  //breakReducer
  let intialBreak = 5;
  function breakInit(intialBreak) {
    return { break: intialBreak };
  }
  const breakReducer = (state, action) => {
    switch (action.type) {
      case "incBreak":
        return { break: state.break + 1 };
      case "decBreak":
        return { break: state.break - 1 };
      case "resetBreak":
        return breakInit(action.payload);
      default:
        throw new Error();
    }
  };
  const [breakState, breakDispatch] = useReducer(
    breakReducer,
    intialBreak,
    breakInit
  );

  //sessionReducer
  let intialSession = 25;
  function sessionInit(intialSession) {
    return { session: intialSession };
  }
  const sessionReducer = (state, action) => {
    switch (action.type) {
      case "incSession":
        return { session: state.session + 1 };
      case "decSession":
        return { session: state.session - 1 };
      case "resetSession":
        return sessionInit(action.payload);
      default:
        throw new Error();
    }
  };
  const [sessionState, sessionDispatch] = useReducer(
    sessionReducer,
    intialSession,
    sessionInit
  );
  return (
    <div className="Clock">
      <CustomPlayButton play={play} setPlay={setPlay} />
      <CustomResetButton
        reset={reset}
        setReset={setReset}
        setPlay={setPlay}
        breakDispatch={breakDispatch}
        sessionDispatch={sessionDispatch}
        intialBreak={intialBreak}
        intialSession={intialSession}
      />
      <h3 style={{ color: "white", fontSize: "36px" }}>25:5 CLOCK</h3>
      <div style={{ display: "flex" }}>
        <Break state={breakState} dispatch={breakDispatch} play={play} />
        <Session state={sessionState} dispatch={sessionDispatch} play={play} />
      </div>
      <Timer
        break={breakState}
        session={sessionState}
        play={play}
        reset={reset}
      />
    </div>
  );
};

export default Clock;

import React from "react";
import Break from "../Break/Break";

import CustomPlayButton from "../CustomParts/CustomPlayButton/CustomPlayButton";
import CustomResetButton from "../CustomParts/CustomResetButton/CustomResetButton";
import Session from "../Session/Session";
import Timer from "../Timer/Timer";
import {useSpring} from "react-spring"
import "./Clock.css";
const Clock = () => {
	const anime = useSpring({transform:"translate(-10px, 17px)rotate(45deg)",height:"31px",delay:4000  ,from:{transform:"translate(0px, 0px) rotate(45deg)",height:"50px"}})
	const animePlay = useSpring({transform:"translate(10px, 17px)rotate(315deg)",height:"31px",delay:2000  ,from:{transform:"translate(0px, 0px) rotate(315deg)",height:"50px"}})
  return (
    <div className="Clock">
      <CustomPlayButton anime={animePlay} />
			<CustomResetButton anime={anime}/>
			<h3 style={{color:"white", fontSize:"36px"}}>25:5 CLOCK</h3>
      <div style={{ display: "flex" }}>
        <Break value={5} />
        <Session value={25} />
      </div>
      <Timer />
    </div>
  );
};

export default Clock;

import React,{useState} from 'react'
import "./CustomResetButton.css"
import{ Spring}from "react-spring/renderprops"
import{ animated }from "react-spring"
const CustomResetButton = (props) => {
	const [animation, setAnimation] = useState(false)
const handleClick = () =>{
	console.log("kkkkkkkkkkkkk")
	setAnimation(!animation)
}
	return (
	<Spring
	from={{transform:"translate(0px, 0px) rotate(45deg)",height:"50px"}}
	to={{transform:"translate(-10px, 17px)rotate(45deg)",height:"31px",delay:4000  }}
	reset="true"
	>
		{animationStyle =>	(<div  style={animation ? animationStyle : null }className="CustomResetButton" onClick={handleClick}>
			
			</div>)}
	</Spring>

	)
}

export default CustomResetButton




import React from 'react'
import "./CustomResetButton.css"
import{ animated }from "react-spring"
const CustomResetButton = (props) => {
	return (
		<animated.div  style={props.anime}className="CustomResetButton">
			
		</animated.div>
	)
}

export default CustomResetButton




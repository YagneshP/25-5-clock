import React from 'react'
import CustomDisplay from '../CustomParts/CustomDisplay/CustomDisplay'
import {CustomTriangleUpButton,CustomTriangleDownButton} from '../CustomParts/CustomTriangleButton/CustomTriangleButton'

const Break = (props) => {
	return (
		<div style={{display:"flex",flexDirection:"column", justifyContent:"space-around", width:250, alignItems:"center"}}>
		<div style={{display:"flex", justifyContent:"space-around", width:250, alignItems:"center"}}>
			<CustomTriangleUpButton/>
			<CustomDisplay value={props.value}/>
			<CustomTriangleDownButton/>
		</div>
		<h3 style={{color:"white", fontSize:24}}>Break-Length</h3>
		</div>
	)
}

export default Break

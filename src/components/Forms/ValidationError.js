import React from 'react';
import './ValidationError.css';

function ValidationError(props) {
	if(props.message){
		return (
			<span 
				className="error"
			>
				*{props.message}
			</span>
		)
	}
	return (
		<></>
	)
}

export default ValidationError;
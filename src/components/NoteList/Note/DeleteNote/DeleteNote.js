import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DeleteNote.css';

export default class DeleteNote extends Component {

	render() {
	  return (
	  	<Link
				to={'/delete-note'}
			>
		    <button
					className="DeleteNote"
				>
					Delete Note
	    	</button>
	    </Link>
	  );		
	}

}

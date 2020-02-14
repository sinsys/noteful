import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AddNote.css';

export default class AddNote extends Component {

	render() {
	  return (
	  	<div
	  		className="Notelist-header"
	  	>
	  		<h2>
	  			{this.props.folderName}
	  		</h2>
		  	<Link
		  		to={'/add-note'}
		  		className="AddNote"
		  	>
		  		+ Add Note
			  </Link>
	  	</div>
	  );		
	}

}

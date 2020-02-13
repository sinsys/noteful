import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AddNote.css';

export default class AddNote extends Component {

	render() {
	  return (
	  	<Link
	  		to={'/add-note'}
	  		className="AddNote"
	  	>
	  		+ Add Note
		  </Link>
	  );		
	}

}

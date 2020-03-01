import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AddFolder.css';

export default class AddFolder extends Component {

	render() {
	  return (
	  	<Link
	  		to={'/add/folder'}
	  		className="AddFolder"
	  	>
		    + Add Folder
	    </Link>
	  );		
	}

}

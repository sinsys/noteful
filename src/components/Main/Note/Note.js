import React, { Component } from 'react';
import './Note.css';

import DeleteNote from './DeleteNote/DeleteNote';

export default class Note extends Component {

	render() {
	  return (
	    <div className="Note">
	    	<h2>
	    		Note Title
	    	</h2>
	    	<DeleteNote />
	    </div>
	  );		
	}

}

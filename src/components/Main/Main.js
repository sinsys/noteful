import React, { Component } from 'react';
import './Main.css';

import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

export default class Main extends Component {

	render() {
	  return (
	    <div className="Main">
	    	<h2>
	    		Main
	    	</h2>
	    	<Note />
	    	<AddNote />
	    </div>
	  );		
	}

}

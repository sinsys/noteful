import React, { Component } from 'react';
import './Main.css';

import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

class Main extends Component {

	render() {
	  return (
	    <div className="Main">
	    	<h2>
	    		Main
	    	</h2>
	    	{this.props.notes
	    		.map(note => (
	    			<Note
	    				{...note}
	    			/>
	    		))
	    	}
	    	<AddNote />
	    </div>
	  );		
	}

}

Main.defaultProps = {
	notes: []
}

export default Main;
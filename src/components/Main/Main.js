import React, { Component } from 'react';

import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

import './Main.css';

class Main extends Component {

	render() {
	  return (
	    <main 
	    	className="Main"
	    >
	    	<h2>
	    		Main
	    	</h2>

      	<div
      		className="Notes-wrapper"
      	>
	 	    	{this.props.notes
		    		.map(note => (
		    			<Note
		    				{...note}
		    				key={note.id}
		    			/>
		    		))
		    	}
        </div>

	    	<AddNote />
	    </main>
	  );		
	}

}

Main.defaultProps = {
	notes: []
}

export default Main;




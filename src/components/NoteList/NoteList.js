import React, { Component } from 'react';

import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

import './NoteList.css';

class NoteList extends Component {

	render() {
	  return (
	    <main 
	    	className="Main"
	    >
	    	<h2>
	    		Notes
	    		<span
	    			className="Notes-count"
	    		>
	    			{this.props.notes.length}
	    		</span>
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

NoteList.defaultProps = {
	notes: []
}

export default NoteList;




import React, { Component } from 'react';

import Note from './Note/Note';
import AddNote from './AddNote/AddNote';
import APIContext from '../../APIContext';

import './NoteList.css';

class NoteList extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = APIContext;

  getFolderNotes = (notes=[], folderId) => {
    return (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
  };

	render() {
		const { notes = [] } = this.context;
		const { folderId } = this.props.match.params;
		const folderNotes = this.getFolderNotes(notes, folderId);
	  return (
	    <main 
	    	className="Main"
	    >
	    	<h2>
	    		Notes
	    		<span
	    			className="Notes-count"
	    		>
	    			{folderNotes.length}
	    		</span>
	    	</h2>
      	<div
      		className="Notes-wrapper"
      	>
	 	    	{folderNotes
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

export default NoteList;



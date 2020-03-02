import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Link } from 'react-router-dom';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';
import NoteListError from './NoteListError';
import APIContext from '../../APIContext';

import './NoteList.css';

class NoteList extends Component {

  static contextType = APIContext;

  getFolderNotes = (notes=[], folderId) => {
    return (!folderId)
      ? notes
      : notes.filter(note => note.folder === parseInt(folderId));
  };

  getFolderName = (folders=[], folderId) => {
  	const folderMatch = folders.filter(folder => folder.id === parseInt(folderId));
  		return (folderMatch[0])
  			? folderMatch[0].name
  			: "All Notes"
  }

  verifyFolderExists = (folders=[], folderId) => {
  	return (
  		folders.some((folder => 
  			folder.id === parseInt(folderId)
  		))
  	)
  };

	render() {

		const { folders = [], notes = [] } = this.context;
		const { folderId } = this.props.match.params;
		const folderNotes = this.getFolderNotes(notes, folderId);
	  return (
      <Route 
        key='/'
        path='/' 
        render={routeProps => {
          return (
						<main 
							className="Main"
						>
							<NoteListError>
								{(this.props.folderId === "undefined" || this.verifyFolderExists(folders, this.props.folderId))
								  ?	<>
											<AddNote 
                        folderName={this.getFolderName(folders, folderId)}
                        folder={folderId}
										  />
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
								  	</>
								  : <div
				    					className="empty"
				    				>
				    					<p>
				    						I'm sorry, this folder does not exist.
				    					</p>
				    					<Link
				    						to='/'
				    					>
				    						Home
				    					</Link>
				    				</div>
								}
							</NoteListError>
						</main>

          )
        }}
      />
	  );		
	}

}

export default withRouter(NoteList);

NoteList.defaultProps = {
	folderId: 'undefined',
	folderNotes: []
}

NoteList.propTypes = {
	folderId: PropTypes.string.isRequired,
	folderNotes: PropTypes.array.isRequired
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Folder.css';

export default class Folder extends Component {

  getFolderNotes = (notes=[], folderId) => (
    (!folderId)
      ? notes
      : notes
          .filter(note => (
            note.folderId === folderId
          ))
  );

	render() {
	  return (
	    <li 
	    	className="Folder"
	    >
	    	<Link
	    		to={'/folders/' + this.props.id}
	    	>
	    		{this.props.name}
	    	</Link>
	    </li>
	  );		
	}

}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EditFolder from '../EditFolder/EditFolder';

import './AddNote.css';

export default class AddNote extends Component {

	render() {
	  return (
	  	<div
	  		className="Notelist-header"
	  	>
	  		<h2>
	  			{this.props.folderName}
          {(this.props.folder)
            ? (
                <EditFolder
                  folder={this.props.folder}
                />
              )
            : ""
          }
	  		</h2>
		  	<Link
		  		to={'/add/note'}
		  		className="AddNote"
		  	>
		  		+ Add Note
			  </Link>
	  	</div>
	  );		
	}

}

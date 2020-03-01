import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import APIContext from '../../../APIContext';

import './Folder.css';

export default class Folder extends Component {

  static contextType = APIContext;

  countFolderNotes = (notes=[], folderId) => {
    return notes.filter(note => 
    	note.folder === folderId
    ).length;
  }

	render() {
	  return (
    	<NavLink
    		to={'/folder/' + this.props.id}
    		className="Folder"
    	>
    		<span>
    			{this.props.name}
    		</span>
    		<span
    			className="Notes-count"
    		>
    			{this.countFolderNotes(this.context.notes, this.props.id)}
    		</span>
    	</NavLink>
	  );		
	}

}

Folder.defaultProps = {
  name: ''
}

Folder.propTypes = {
  name: PropTypes.string.isRequired
}
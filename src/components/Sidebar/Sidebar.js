import React, { Component } from 'react';

import SidebarNav from './SidebarNav/SidebarNav';
import Folder from './Folder/Folder';
import AddFolder from './AddFolder/AddFolder';
import APIContext from '../../APIContext';

import './Sidebar.css';

class Sidebar extends Component {

	static contextType = APIContext;

  countFolderNotes = (notes=[], folderId) => {
    return notes.filter(note => 
    	note.folderId === folderId
    ).length;
  }

	render() {
		const { folders=[], notes=[] } = this.context
	  return (
	    <div className="Sidebar">
	    	<SidebarNav 
	    		{...this.props.routeProps}
	    	/>
	    	<h2>
	    		Folders
	    	</h2>
	    	{folders
	    		.map(folder => (
	    			<Folder
	    				id={folder.id}
	    				key={folder.id}
	    				name={folder.name}
	    				count={this.countFolderNotes(notes, folder.id)}
	    			/>
	    		))
	    	}
	    	<AddFolder />
	    </div>
	  );		
	}

}

export default Sidebar;
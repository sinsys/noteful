import React, { Component } from 'react';

import SidebarNav from './SidebarNav/SidebarNav';
import Folder from './Folder/Folder';
import AddFolder from './AddFolder/AddFolder';

import './Sidebar.css';

class Sidebar extends Component {

  countFolderNotes = (notes=[], folderId) => {
    return notes.filter(note => 
    	note.folderId === folderId
    ).length;
  }

	render() {
	  return (
	    <div className="Sidebar">
	    	<SidebarNav 
	    		{...this.props.routeProps}
	    	/>
	    	<h2>
	    		Folders
	    	</h2>
	    	{this.props.folders
	    		.map(folder => (
	    			<Folder
	    				id={folder.id}
	    				key={folder.id}
	    				name={folder.name}
	    				count={this.countFolderNotes(this.props.notes, folder.id)}
	    			/>
	    		))
	    	}
	    	<AddFolder />
	    </div>
	  );		
	}

}

Sidebar.defaultProps = {
	folders: [],
}

export default Sidebar;
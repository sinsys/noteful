import React, { Component } from 'react';

import SidebarNav from './SidebarNav/SidebarNav';
import Folder from './Folder/Folder';
import AddFolder from './AddFolder/AddFolder';

import './Sidebar.css';

class Sidebar extends Component {

	render() {
	  return (
	    <div className="Sidebar">
	    	<SidebarNav />
	    	<h2>
	    		Sidebar
	    	</h2>
	    	{this.props.folders
	    		.map(folder => (
	    			<Folder
	    				id={folder.id}
	    				key={folder.key}
	    				name={folder.name}
	    			/>
	    		))
	    	}
	    	<AddFolder />
	    </div>
	  );		
	}

}

Sidebar.defaultProps = {
	folders: []
}

export default Sidebar;
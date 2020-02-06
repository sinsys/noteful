import React, { Component } from 'react';
import './Sidebar.css';

// import SidebarNav from './SidebarNav/SidebarNav';
import Folder from './Folder/Folder';
import AddFolder from './AddFolder/AddFolder';

export default class Sidebar extends Component {

	render() {
	  return (
	    <div className="Sidebar">
	    	{/* <SidebarNav /> */}
	    	<h2>
	    		Sidebar
	    	</h2>
	    	<Folder />
	    	<Folder />
	    	<Folder />
	    	<AddFolder />
	    </div>
	  );		
	}

}

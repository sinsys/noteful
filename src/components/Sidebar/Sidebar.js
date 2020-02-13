import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Folder from './Folder/Folder';
import AddFolder from './AddFolder/AddFolder';
import APIContext from '../../APIContext';

import './Sidebar.css';

class Sidebar extends Component {

	static contextType = APIContext;

	render() {
		const { folders=[] } = this.context
	  return (
	    <div className="Sidebar">
	    	<h2>
	    		Folders
	    	</h2>
	    	<NavLink
	    		exact
	    		to={'/'}
	    		className="Folder"
	    	>
	    		<span>
	    			All Notes
	    		</span>
	    		<span
	    			className="Notes-count"
	    		>
	    			{this.context.notes.length}
	    		</span>
	    	</NavLink>
	    	{folders
	    		.map(folder => (
	    			<Folder
	    				key={folder.id}
	    				{...folder}
	    			/>
	    		))
	    	}
	    	<AddFolder />
	    </div>
	  );		
	}

}

export default Sidebar;
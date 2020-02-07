import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Folder.css';

export default class Folder extends Component {

	render() {
	  return (
	    <li 
	    	className="Folder"
	    >
	    	<Link
	    		to={'/folder/' + this.props.id}
	    	>
	    		{this.props.name}
	    		<span
	    			className="Folder-count"
	    		>
	    			{this.props.count}
	    		</span>
	    	</Link>
	    </li>
	  );		
	}

}

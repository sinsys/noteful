import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Folder.css';

export default class Folder extends Component {

	render() {
	  return (
	    <div className="Folder">
	    	<Link
	    		to={'/folders/' + this.props.id}
	    	>
	    		{this.props.name}
	    	</Link>
	    </div>
	  );		
	}

}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SidebarNav.css';

export default class SidebarNav extends Component {

	render() {
	  return (
	  	<Link
	  		to={'/back'}
	  	>
		    <button
		    	className="SidebarNav"
		    >
		    	Go Back
		    </button>
		  </Link>
	  );		
	}

}

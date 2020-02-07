import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SidebarNav.css';

class SidebarNav extends Component {

	render() {
	  return (
	  	<Link
	  		to={'/'}
	  	>
		    <button
		    	className="SidebarNav"
		    	onClick={() => this.props.history.goBack()}
		    >
		    	Go Back
		    </button>
		  </Link>
	  );		
	}

}

SidebarNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}

export default SidebarNav;
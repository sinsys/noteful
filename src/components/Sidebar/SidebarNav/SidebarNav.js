import React, { Component } from 'react';

import './SidebarNav.css';

class SidebarNav extends Component {

	render() {
	  return (
	  	<div
	  		className="SidebarNav"
	  		onClick={() => this.props.handleGoBack()}
	  	>
		    &#x25c0;&nbsp;
		  </div>
	  );		
	}
}


export default SidebarNav;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './SidebarNav.css';

class SidebarNav extends Component {

	render() {
	  return (
	  	<div
	  		className="SidebarNav"
	  		onClick={() => this.props.history.goBack()}
	  	>
		    &#x25c0;&nbsp;
		  </div>
	  );		
	}
}

export default withRouter(SidebarNav);
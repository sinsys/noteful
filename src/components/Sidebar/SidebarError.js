import React, { Component } from 'react';

class SidebarError extends Component {
	state = {
		hasError: false
	}

	static getDerivedStateFromError(error) {
	  return { hasError: true };
	}

	render() {
	  if (this.state.hasError) {      
	    return (
	      <h2>We had an issue loading folders</h2>
	    );
	  }
	  return this.props.children;
	}  
}

export default SidebarError;
import React, { Component } from 'react';

class NoteListError extends Component {
	state = {
		hasError: false
	}

	static getDerivedStateFromError(error) {
	  return { hasError: true };
	}

	render() {
	  if (this.state.hasError) {      
	    return (
	      <h2>We had an issue loading notes</h2>
	    );
	  }
	  return this.props.children;
	}  
}

export default NoteListError;
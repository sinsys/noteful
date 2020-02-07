import React, { Component } from 'react';

import './NoteDetails.css';

class NoteDetails extends Component {

	render() {
	  return (
	    <main 
	    	className="Main"
	    >
	    	<h2>
	    		{this.props.name}
	    	</h2>
	      <div className='NoteDetails-content'>
	        {this.props.content.split(/\n \r|\n/).map((para, i) =>
	          <p key={i}>{para}</p>
	        )}
	      </div>
	    </main>
	  );		
	}

}

NoteDetails.defaultProps = {
  content: ''
}
export default NoteDetails;




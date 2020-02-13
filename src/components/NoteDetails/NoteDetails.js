import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DeleteNote from '../NoteList/Note/DeleteNote/DeleteNote';
import APIContext from '../../APIContext';

import './NoteDetails.css';

class NoteDetails extends Component {

	static contextType = APIContext;

	render() {
	  return (
	    <main 
	    	className="Main"
	    >
    		{(this.props.content.length === 0)
    			? <div
    					className="empty"
    				>
    					<p>
    						I'm sorry, this note does not exist.
    					</p>
    					<Link
    						to='/'
    					>
    						Home
    					</Link>
    				</div>
    			: <>
	    				<div
		    				className="Notes-content-wrapper"
				    	>
					    	<h2>
					    		{this.props.name}
					    	</h2>
					      <div className='NoteDetails-content'>
					        {this.props.content.split(/\n \r|\n/).map((para, i) =>
					          <p key={i}>{para}</p>
					        )}
					      </div>
				    	</div>
	  		    	<DeleteNote 
				    		{...this.props}
				    	/>
			    	</>
    		}
	    </main>
	  );		
	}

}

NoteDetails.defaultProps = {
	content: '',
  history: {
    goBack: () => {}
  }
}

export default NoteDetails;




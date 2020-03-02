import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import DeleteNote from '../NoteList/Note/DeleteNote/DeleteNote';
import EditNote from './EditNote/EditNote';

import './NoteDetails.css';

class NoteDetails extends Component {

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
              <div
                className="button-wrapper"
              >
                <DeleteNote 
                  id={this.props.id}
                  folder={this.props.folder}
                  history={this.props.history}
                />
                <EditNote 
                  id={this.props.id}
                />
              </div>

			    	</>
    		}
	    </main>
	  );		
	}

}

NoteDetails.defaultProps = {
	id: 0,
	content: '',
	folderId: '',
	modified: '',
	name: '',
  history: {
    goBack: () => {}
  }
}

NoteDetails.propTypes = {
	id: PropTypes.number.isRequired,
	content: PropTypes.string.isRequired,
	folderId: PropTypes.string.isRequired,
	modified: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default NoteDetails;
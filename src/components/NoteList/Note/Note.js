import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import DeleteNote from './DeleteNote/DeleteNote';

import './Note.css';

export default class Note extends Component {

  static defaultProps = {
    match: {
      params: {}
    }
  }

	// Prevents massive descriptions being listed in list
	reduceDescLength(str, maxChars) {
		if(str !== undefined){
			return (
				str.length > maxChars
					? str.substring(0, maxChars - 3) + "..." 
					: str.substring(0, maxChars)
			);
		}	else {
			return "This book currently has no description listed.";
		}
	}

	render() {

		const formattedDate = format(
			new Date(
				Date.parse(
					this.props.modified
				)
			), 
			'Pp'
		);

	  return (
	    <div 
	    	className="Note"
	    >
	    	<div className="Note-content-wrapper">
	    		<Link
	    			to={'/note/' + this.props.id}
	    		>
			    	<h3
			    		className="Note-name"
			    	>
		    			{this.props.name}
		    		
			    	</h3>
			    	<p
			    		className="Note-content-abbv"
			    	>
			    		{this.reduceDescLength(this.props.content, 128)}
			    	</p>
			    	<p
			    		className="Note-modified"
			    	>
			    		Modified {formattedDate}
			    	</p>
		    	
		    	</Link>
	    	</div>
	    	<DeleteNote 
	    		id={this.props.id}
	    		folder={this.props.folder}
	    		onDeleteNote={this.props.onDeleteNote}
	    		history={this.props.history}
	    	/>
	    </div>
	  );		
	}

}

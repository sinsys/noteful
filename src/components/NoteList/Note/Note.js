import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import DeleteNote from './DeleteNote/DeleteNote';

import './Note.css';

export default class Note extends Component {

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
	    	<h3
	    		className="Note-name"
	    	>
	    		<Link
	    			to={'/note/' + this.props.id}
	    		>
	    			{this.props.name}
	    		</Link>
	    	</h3>
	    	<DeleteNote 
	    		id={this.props.id}
	    		onDeleteNote={this.props.onDeleteNote}
	    	/>
	    	<p
	    		className="Note-modified"
	    	>
	    		Modified {formattedDate}
	    	</p>
	    </div>
	  );		
	}

}

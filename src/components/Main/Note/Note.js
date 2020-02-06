import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DeleteNote from './DeleteNote/DeleteNote';

import './Note.css';

export default class Note extends Component {

	render() {
	  return (
	    <div 
	    	className="Note"
	    >
	    	<h3
	    		className="Note-name"
	    	>
	    		<Link
	    			to={'/notes/' + this.props.id}
	    		>
	    			{this.props.name}
	    		</Link>
	    	</h3>
	    	<DeleteNote 
	    		id={this.props.id}
	    	/>
	    </div>
	  );		
	}

}

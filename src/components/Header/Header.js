import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {

	render() {
	  return (
	    <div className="Header">
	    	<h1>
	    		<Link
	    			to='/'
	    		>
	    			Noteful
	    		</Link>
	    	</h1>
	    </div>
	  );		
	}

}

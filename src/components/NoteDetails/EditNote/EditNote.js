import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './EditNote.css';

export default class EditNote extends Component {

	render() {
	  return (
      <Link
        to={`/edit/note/${this.props.id}`}
        className="EditNote"
      >
        Edit Note
      </Link>
	  );		
	}

}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './EditFolder.css';

export default class EditFolder extends Component {

	render() {
	  return (
      <Link
        to={`/edit/folder/${this.props.folder}`}
        className="EditNote"
      >
        Edit Folder
      </Link>
	  );		
	}

}

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import APIContext from '../../../../APIContext';

import config from '../../../../config';

import './DeleteNote.css';

class DeleteNote extends Component {

  static defaultProps ={
    history: {
      goBack: () => {}
    }
  }

  static contextType = APIContext;

  handleClickDelete = e => {
    e.preventDefault();
    const noteId = this.props.id;
    const folderId = this.props.folderId;

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId);
        this.props.history.push(`/folder/${folderId}`);
      })
      .catch(error => {
        console.error({ error })
      })
  }

	render() {
	  return (
	    <div
				className="DeleteNote"
				onClick={this.handleClickDelete}
			>
				Delete
    	</div>
	  );		
	}

}

export default withRouter(DeleteNote);
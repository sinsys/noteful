import React, { Component } from 'react';
import APIContext from '../../../../APIContext';

import config from '../../../../config';

import './DeleteNote.css';

export default class DeleteNote extends Component {

  static defaultProps ={
    onDeleteNote: () => {},
  }

  static contextType = APIContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

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
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId);
      })
      .catch(error => {
        console.error({ error })
      })
  }

	render() {
	  return (
	    <button
				className="DeleteNote"
				onClick={this.handleClickDelete}
			>
				Delete Note
    	</button>
	  );		
	}

}

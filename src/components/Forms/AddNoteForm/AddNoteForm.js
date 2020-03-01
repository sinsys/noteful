import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError';

import APIContext from '../../../APIContext'
import config from '../../../config'
import './AddNoteForm.css'

class AddNoteForm extends Component {

  static contextType = APIContext;

  state = {
    name: {
      value: '',
      touched: false
    },
    content: {
      value: '',
      touched: false
    },
    folderId: {
      value: '',
      touched: false
    }
  };

  updateName = (name) => {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    })
  };

  updateContent = (content) => {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    })
  };

  updateFolderId = (folderId) => {
    this.setState({
      folderId: {
        value: folderId
      }
    })
  };

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    }
  }

  validateContent(fieldValue) {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return 'Note must contain content';
    }
  }

  validateFolderId(fieldValue) {
    const folderId = this.state.folderId.value;
    if (folderId === '') {
      return 'Folder must be selected';
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      name: e.target['note-name'].value,
      content: e.target['note-content'].value,
      folder: e.target['note-folder-id'].value,
      modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        this.context.addNote(note)
        this.props.history.push(`/folder/${note.folder}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { folders=[] } = this.context
    return (
      <main 
        className="Main"
      >
        <section 
          className='AddNoteForm'
        >
          <h2>
            Create a note
          </h2>
          <form 
            className="noteful-form"
            onSubmit={this.handleSubmit}
          >
            <div 
              className='field'
            >
              <label 
                htmlFor='note-name-input'
              >
                Name
                {this.state.name.touched && (
                  <ValidationError 
                    message={this.validateName()} 
                  />
                )}
              </label>
              <input 
                type='text' 
                id='note-name-input' 
                name='note-name' 
                onChange={e => this.updateName(e.target.value)}
              />
            </div>
            <div 
              className='field'
            >
              <label 
                htmlFor='note-content-input'
              >
                Content
                {this.state.content.touched && (
                  <ValidationError 
                    message={this.validateContent()} 
                  />
                )}
              </label>
              <textarea 
                id='note-content-input' 
                name='note-content' 
                rows={4}
                onChange={e => this.updateContent(e.target.value)}
              />
            </div>
            <div 
              className='field'
            >
              <label 
                htmlFor='note-folder-select'
              >
                Folder
                <ValidationError 
                  message={this.validateFolderId()} 
                />
              </label>
              <select 
                id='note-folder-select' 
                name='note-folder-id'
                onChange={e => this.updateFolderId(e.target.value)}
              >
                <option
                  key="no-folder-option"
                  value=""
                >
                  ...Select a folder...
                </option>
                {folders.map(folder =>
                  <option 
                    key={folder.id} 
                    value={folder.id}
                  >
                    {folder.name}
                  </option>
                )}
              </select>
            </div>
            <div 
              className='buttons'
            >
              <button 
                type='submit'
                disabled={
                  this.validateName() ||
                  this.validateContent() ||
                  this.validateFolderId()
                }
              >
                Add note
              </button>
            </div>
          </form>
        </section>
      </main>
    )
  }
}

AddNoteForm.defaultProps = {
  history: {
    goBack: () => {}
  }
}

export default withRouter(AddNoteForm);
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError';

import APIContext from '../../../APIContext'
import config from '../../../config'

import './EditFolderForm.css'

class EditFolderForm extends Component {

  static contextType = APIContext;

  state = {
    name: {
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

  validateName(fieldValue) {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'Name is required';
    }
  }

  deleteFolder(folderId) {
    if(prompt(
      `Deleting folder ${this.props.name} will remove ALL notes within it.\n 
      Are you sure you want to continue?\n\n
      Type "${this.props.name}" to permanently delete.`) ===
      `${this.props.name}`) {
        fetch(`${config.API_ENDPOINT}/folders/${this.props.id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
          })
          .then((folder) => {
            this.context.deleteFolder(this.props.id);
            this.props.history.push(`/`);
          })
          .catch(error => {
            console.error({ error })
          });
    };

  };

  handleSubmit = e => {
    e.preventDefault();
    const updatedFolder = {
      name: e.target['folder-name'].value
    }
    fetch(`${config.API_ENDPOINT}/folders/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedFolder),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return (
          res.json()
        )
      })
      .then((folder) => {
        updatedFolder.id = this.props.id;
        this.context.editFolder(folder);
        this.props.history.push(`/folder/${this.props.id}`);
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <main 
        className="Main"
      >
        <section 
          className='AddFolderForm'
        >
          <h2>
            Edit folder
          </h2>
          <form 
            onSubmit={this.handleSubmit}
          >
            <div 
              className='field'
            >
              <label 
                htmlFor='folder-name-input'
              >
                Name:
                {this.state.name.touched && (
                  <ValidationError 
                    message={this.validateName()} 
                  />
                )}
              </label>
              <input 
                type='text' 
                id='folder-name-input' 
                name='folder-name'
                defaultValue={this.props.name}
                onChange={e => this.updateName(e.target.value)}
              />
            </div>
            <div 
              className='buttons'
            >
              <button 
                type='submit'
              >
                Edit folder
              </button>
            </div>
          </form>
          <div 
            className='buttons'
          >
            <button 
              type='button'
              className='delete-btn'
              onClick={e => this.deleteFolder()}
            >
              Delete
            </button>
          </div>
        </section>
      </main>
    )
  }
}

EditFolderForm.defaultProps = {
  history: {
    push: () => {}
  }
}

export default withRouter(EditFolderForm);
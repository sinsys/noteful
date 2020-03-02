import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError';

import APIContext from '../../../APIContext'
import config from '../../../config'

import './AddFolderForm.css'

class AddFolderForm extends Component {

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

  handleSubmit = e => {
    e.preventDefault()
    const folder = {
      name: this.state.name.value
    }
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder),
    })
      .then(res => {
        if (!res.ok)
        return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(folder => {
        this.context.addFolder(folder)
        this.props.history.push(`/folder/${folder.id}`)
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
            Create a folder
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
                onChange={e => this.updateName(e.target.value)}
              />
            </div>
            <div 
              className='buttons'
            >
              <button 
                type='submit'
                disabled={
                  this.validateName()
                }
              >
                Add folder
              </button>
            </div>
          </form>
        </section>
      </main>
    )
  }
}

AddFolderForm.defaultProps = {
  history: {
    push: () => {}
  }
}

export default withRouter(AddFolderForm);
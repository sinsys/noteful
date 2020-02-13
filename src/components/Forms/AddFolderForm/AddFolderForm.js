import React, { Component } from 'react'
import APIContext from '../../../APIContext'
import config from '../../../config'

import './AddFolderForm.css'

export default class AddFolderForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = APIContext;

  handleSubmit = e => {
    e.preventDefault()
    const folder = {
      name: e.target['folder-name'].value
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
      <main className="Main">
      <section className='AddFolderForm'>
        <h2>Create a folder</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input type='text' id='folder-name-input' name='folder-name' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add folder
            </button>
          </div>
        </form>
      </section>
      </main>
    )
  }
}
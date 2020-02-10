import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NoteList from './components/NoteList/NoteList';
import NoteDetails from './components/NoteDetails/NoteDetails';
import AddFolderForm from './components/Forms/AddFolderForm/AddFolderForm';
import AddNoteForm from './components/Forms/AddNoteForm/AddNoteForm';

import './App.css';

import APIContext from './APIContext';
import config from './config.js';
// import STORE from './STORE.js';

export default class App extends Component {
  
  state = {
    folders: [],
    notes: []
  };

  makeRoutes = () => {
    const {notes} = this.state;
    const routes = [];

    // Root and Folder Routes
    const rootFolderRoutes = ['/', '/folder/:folderId'].map(path => (
      <Route
          exact
          key={path}
          path={path}
          render={routeProps => {
            const {folderId} = routeProps.match.params;
            return (
              <div
                className="Sidebar-NoteList_wrapper"
              >
                <Sidebar
                  key={"Sidebar"}
                  folderId={folderId}
                />
                <NoteList 
                  key={"NoteList"}
                  folderId={folderId}
                  {...routeProps}
                />
              </div>
            );
          }}
        />
    ));
    rootFolderRoutes.map(route => routes.push(route));

    // Note routes
    routes.push(
      <Route
        key="/note/:noteId"
        exact path="/note/:noteId"
        render={routeProps => {
          const {noteId} = routeProps.match.params;
          const note = this.getNote(notes, noteId) || {};
          return (
            <div
              className="Sidebar-NoteList_wrapper"
            >
              <Sidebar
                key={"Sidebar"}
              />
              <NoteDetails
                key={"NoteDetails"}
                {...routeProps}
                {...note}
              />
            </div>
          );
        }}
      />
    );

    // Form routes
    routes.push(
      <Route 
        key="/add-folder"
        path="/add-folder" 
        component={AddFolderForm}
      />,
      <Route 
        key="/add-note"
        path="/add-note" 
        component={AddNoteForm}
      />
    );
    
    return (
      routes
    )
  };

  getNote = (notes=[], noteId) => {
    return (
      notes.find(note => note.id === noteId)
    );
  };

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => {
        return note.id !== noteId
      })
    })
    console.log(this.state);
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if(!notesRes.ok) {
          return (
            notesRes.json()
              .then(err => {
                Promise.reject(err)
              })
          )
        }
        if(!foldersRes.ok) {
          return (
            foldersRes.json()
              .then(err => {
                Promise.reject(err);
              })
          )
        }
        return (
          Promise.all([
            notesRes.json(),
            foldersRes.json()
          ])
        )
      })
      .then(([notes, folders]) => {
        this.setState({
          notes,
          folders
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }
    return (
      <APIContext.Provider 
        value={contextValue}
      >
        <div className="App">
          <Header />
          {this.makeRoutes()}
        </div>
      </APIContext.Provider>
    );
  };

};
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NoteList from './components/NoteList/NoteList';
import NoteDetails from './components/NoteDetails/NoteDetails';

import './App.css';
import STORE from './STORE.js';

export default class App extends Component {
  
  state = {
    folders: [],
    notes: []
  };

  makeRoutes = () => {
    const {notes, folders} = this.state;
    const routes = [];

    // Root and Folder Routes
    const rootFolderRoutes = ['/', '/folder/:folderId'].map(path => (
      <Route
          exact
          key={path}
          path={path}
          render={routeProps => {
            const {folderId} = routeProps.match.params;
            const folderNotes = this.getFolderNotes(
                notes,
                folderId
            );
            return (
              <div
                className="Sidebar-NoteList_wrapper"
              >
                <Sidebar
                  key={"Sidebar"}
                  folders={folders}
                  notes={notes}
                />
                <NoteList 
                  key={"NoteList"}
                  notes={folderNotes}
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
        path="/note/:noteId"
        render={routeProps => {
          const {noteId} = routeProps.match.params;
          const note = this.getNote(notes, noteId) || {};
          console.log(note);
          return (
            <div
              className="Sidebar-NoteList_wrapper"
            >
              <Sidebar
                key={"Sidebar"}
                folders={folders}
                notes={notes}
              />
              <NoteDetails
                key={"NoteDetails"}
                {...note}
              />
            </div>
          );
        }}
      />
    );
    return (
      routes
    )
  };

  getFolderNotes = (notes=[], folderId) => {
    return (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
  };
  
  getNote = (notes=[], noteId) => {
    return (
      notes.find(note => note.id === noteId)
    );
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(
        STORE
      );
    }, 500);

  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.makeRoutes()}
      </div>
    );
  };

};
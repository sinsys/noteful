import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NoteList from './components/NoteList/NoteList';
import NoteDetails from './components/NoteDetails/NoteDetails';
import AddFolderForm from './components/Forms/AddFolderForm/AddFolderForm';
import AddNoteForm from './components/Forms/AddNoteForm/AddNoteForm';
import EditNoteForm from './components/Forms/EditNoteForm/EditNoteForm';
import EditFolderForm from './components/Forms/EditFolderForm/EditFolderForm';
import SidebarNav from './components/Sidebar/SidebarNav/SidebarNav';

import './App.css';

import APIContext from './APIContext';
import config from './config.js';

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
        key="/add/folder"
        path="/add/folder" 
        render={routeProps => {
          return (
            <div
              className="Sidebar-NoteList_wrapper"
            >
              <Sidebar
                key={"Sidebar"}
              />
              <AddFolderForm />
            </div>
          )
        }}
      />,
      <Route 
        key="/add/note"
        path="/add/note" 
        render={routeProps => {
          return (
            <div
              className="Sidebar-NoteList_wrapper"
            >
              <Sidebar
                key={"Sidebar"}
              />
              <AddNoteForm />
            </div>
          )
        }}
      />,
      <Route 
        key="/edit/note/:noteId"
        path="/edit/note/:noteId" 
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
              <EditNoteForm 
                {...note}
              />
            </div>
          )
        }}
      />,
      <Route 
        key="/edit/folder/:folderId"
        path="/edit/folder/:folderId" 
        render={routeProps => {
          
          const {folderId} = routeProps.match.params;
          const folder = this.getFolder(folders, folderId) || {};
          
          return (
            <div
              className="Sidebar-NoteList_wrapper"
            >
              <Sidebar
                key={"Sidebar"}
              />
              <EditFolderForm 
                {...folder}
              />
            </div>
          )
        }}
      />,
    );
    
    return (
      routes
    )
  };

  getNote = (notes=[], noteId) => {
    return (
      notes.find(note => note.id === parseInt(noteId))
    );
  };

  getFolder = (folders=[], folderId) => {
    return (
      folders.find(folder => folder.id === parseInt(folderId))
    );
  };

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => {
        return note.id !== noteId
      })
    })
  };

  handleDeleteFolder = folderId => {
    this.setState({
      notes: this.state.notes.filter(note => {
        return note.folder !== folderId
      }),
      folders: this.state.folders.filter(folder => {
        return folder.id !== folderId
      })
    });
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
  };

  handleAddNote = note => {
    this.setState({
      notes: [
        ...this.state.notes,
        note
      ]
    })
  };

  handleEditNote = note => {
    let tempNotes = this.state.notes;
    const noteIndex = tempNotes.findIndex(i => {
      return (
        note.id === i.id
      );
    });
    tempNotes[noteIndex] = note;
    this.setState({
      notes: tempNotes
    });
  };

  handleEditFolder = folder => {
    let tempFolders = this.state.folders;
    const folderIndex = tempFolders.findIndex(i => {
      return (
        folder.id === i.id
      );
    });
    tempFolders[folderIndex] = folder;
    this.setState({
      folders: tempFolders
    });
  };

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
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
      deleteNote: this.handleDeleteNote,
      deleteFolder: this.handleDeleteFolder,
      editNote: this.handleEditNote,
      editFolder: this.handleEditFolder
    }

    return (
      <APIContext.Provider 
        value={contextValue}
      >
        <div className="App">
          <Route
            key="Header"
            path="/"
            render={routeProps => {
              return (
                <>
                  {(routeProps.location.pathname !== '/')
                    ? <SidebarNav />
                    : <></>
                  }
                </>
              )
            }}
          />
          <Header />
          {this.makeRoutes()}
        </div>
      </APIContext.Provider>
    );
  };

};
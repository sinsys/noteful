import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

import './App.css';
import STORE from './STORE.js';

export default class App extends Component {
  
  state = {
    folders: [],
    notes: []
  };

  folderRoutes() {
    const {notes, folders} = this.state;
    const routes = [
      ['/noteful/', '/noteful/folder/:folderId'].map(path => (
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
                  className="Sidebar-Main__wrapper"
                >
                  <Sidebar
                    key={"Sidebar"}
                    folders={folders}
                    notes={notes}
                  />
                  <Main 
                    key={"Main"}
                    notes={folderNotes}
                  />
                </div>
              );
            }}
          />
      ))
    ];
    return (
      routes
    )
  };

  getFolderNotes = (notes=[], folderId) => {
    return (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
  }

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
        {this.folderRoutes()}
      </div>
    );
  };

};


  // createNavRoutes() {
  //   const {notes, folders} = this.state;
  //   return (
  //     <div
  //       className="Sidebar-Main__wrapper"
  //     >
  //       {['/', '/folder/:folderId']
  //         .map(path => (
  //           <Route
  //             exact path={path}
  //             key={path}
  //             render={routeProps => {
  //               const {folderId} = routeProps.match.params;
  //               const folderNotes = this.getFolderNotes(
  //                 notes,
  //                 folderId
  //               )
  //               return (
  //                 <Sidebar
  //                   {...routeProps}
  //                   folders={folders}
  //                   notes={folderNotes}
  //                 />
  //               );
  //             }}
  //           />
  //       ))}
  //       <Route
  //         path="/note/:noteId"
  //         render={routeProps => {
  //           const {noteId} = routeProps.match.params;
  //           const note = this.getNote(notes, noteId);
  //           return (
  //             <Main
  //               {...routeProps}
  //               note={note}
  //             />
  //           );
  //         }}
  //       />
  //     </div>
  //   );
  // };
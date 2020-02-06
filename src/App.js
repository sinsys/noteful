import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        folders: STORE.folders,
        notes: STORE.notes
      });
    }, 500);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar
          folders={this.state.folders}
        />
        <Main 
          notes={this.state.notes}
        />
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
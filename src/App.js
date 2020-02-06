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


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        STORE
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact path='/'
          render={(routerProps) => {
            return (
              <Sidebar />
            )
          }}
        />
        <Route
          exact path='/'
          render={(routerProps) => {
            return (
              <Main />
            )
          }}
        />
      </div>
    );
  };

};

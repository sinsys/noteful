import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

export default class App extends Component {
  
  state = {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }

}
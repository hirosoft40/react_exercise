import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <FirstRow />
        <SecondRow />
      </div>
    );
  }
}

export default App;

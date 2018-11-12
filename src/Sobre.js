import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Página sobre</p>
        </header>
      </div>
    );
  }
}

export default Sobre;

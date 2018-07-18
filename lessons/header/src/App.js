import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Header lesson 
 * 
 * Objectives: Component composition & props & state
 * 
 * 1. refactor the header to a Header component, that looks like this:
 *    <Header>Welcome to React</Header>
 * but looks the same as before
 * 
 * 2. make the logo showing optional:
 *    <Header logo>Welcome to React</Header> 
 * 
 * 3. make a button, that toggles the icon
 *    
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

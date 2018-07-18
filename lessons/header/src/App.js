import React, { Component } from 'react';
import Header from './Header'

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

  constructor() {
    super()
    this.state = { showIcon: true }
  }

  render() {
    return (
      <div className="App">
        <Header logo={this.state.showIcon} >Welcome to React</Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.setState({ showIcon: !this.state.showIcon })}>
          show icon
        </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * Lesson TODO app.
 * Objectives: 
 * make todos addable
 * make todos removable
 * make todos checkable / uncheckable
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, text: "Learn JavaScript", done: false },
        { id: 2, text: "Learn React", done: false },
        { id: 3, text: "Play around in JSFiddle", done: true },
        { id: 4, text: "Build something awesome", done: true }
      ]
    }
  }

  toggle = id => {
    const newItems = this.state.items.map(item => {
      if (item.id === id)
        item.done = !item.done
      return item
    })
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
          {this.state.items.map(item => (
            <li key={item.id}>
              <input type="checkbox" checked={item.done}
                onClick={() => this.toggle(item.id)}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default App;

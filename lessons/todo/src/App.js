import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * Lesson TODO app.
 * Objectives: 
 * make todos addable
 * make todos checkable / uncheckable
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, text: "Learn JavaScript", done: false },
        { id: 1, text: "Learn React", done: false },
        { id: 2, text: "Play around in JSFiddle", done: true },
        { id: 3, text: "Build something awesome", done: true }
      ],
      todoInput: 'asdf'
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

  onTodoInputChange = e => {
    this.setState({ todoInput: e.target.value })
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
              <span style={{
                textDecoration: item.done ? 'line-through' : 'none'
              }}>{item.text}</span>
            </li>
          ))}
        </ol>
        <form onSubmit={e => {
          e.preventDefault()
          this.setState({
            items: [...this.state.items, {
              id: this.state.items.length,
              done: false,
              text: this.state.todoInput
            }],
            todoInput: ''
          })
        }}>
          Add todo:<input type='text' value={this.state.todoInput}
            onChange={this.onTodoInputChange} />
          <button type='submit'>add</button>
        </form>
      </div >
    )
  }
}

export default App;

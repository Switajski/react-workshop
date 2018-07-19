const TodoAppCode = `class App extends React.Component {
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
  
    render() {
      return (
        <div>
          <h2>Todos:</h2>
          <ol>
            {this.state.items.map(item => (
              <li key={item.id}>
                <input type="checkbox" checked={item.done} />
                <span style={{textDecoration: done ? 'line-through' : 'none'}}>
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
          <form onSubmit={e => {
            e.preventDefault()
            console.log("implement me")
          }}>
            Add todo:<input type='text' value={this.state.todoInput} />
            <button type='submit'>add</button>
          </form>
        </div>
      )
    }
  }
  
  export default App;`;
export default TodoAppCode
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  CodePane,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import todo from './todo.example'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    const Li = props => <ListItem textSize={28} {...props} />
    const H = props => <Heading size={3} textColor="primary" {...props} />
    const T = props => <Text textColor="primary" {...props} />

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React workshop 19th July, 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            at IT-Manufactory
          </Text>
          <Text size={5}>presentation & code available at <code>git@digital-automotive-engineering.com:switajskim/react-workshop.git</code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H caps>Agenda</H>
          <List>
            <ListItem>Introduction to react</ListItem>
            <ListItem>Install tools</ListItem>
            <ListItem>Hands on code!</ListItem>
            <ListItem>Migration of da-strategyreport to React</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Introduction to React</Heading>
          <List>
            <ListItem>What is React?</ListItem>
            <ListItem>React - the good</ListItem>
            <ListItem>React - the bad</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>
          <Heading size={3} textColor="primary">What is React?</Heading>
          <List textSize={1}>
            <Li>Developed by Facebook</Li>
            <Li>React is a view layer library, not a framework like Backbone, Angular etc.</Li>
            <Li>You can't use React to build a fully-functional web app</Li>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>
          <Heading size={3} textColor="primary">Why should I use React?</Heading>
          <List >
            <Li>Easy to read and understand views</Li>
            <Li>Concept of <Link href={'https://github.com/JedWatson/react-select'}>components</Link> is the future of web development</Li>
            <Li>If your page uses a lot of fast updating data or real time data - React is the way to go</Li>
            <Li>Once you and your team is over the React's learning curve, developing your app will become a lot faster</Li>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>
          <H>React - the bad</H>
          <Heading size={5} textColor="primary">React is nothing but the view</Heading>
          <List >
            <Li>No events</Li>
            <Li>No XHR</Li>
            <Li>No data / models</Li>
            <Li>No promises / deferreds</Li>
            <Li>No idea how to add all of the above</Li>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Hands on code!</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Install tools</Heading>
          <List>
            <ListItem>node package manager (npm) <br />
              For macOS, <code>brew install yarn</code><br />
              For windows, <code>choco install yarn</code> <br />
              <Link href={'https://chocolatey.org/'}>(see Chocolatey)</Link><br /></ListItem>
            <br />
            <ListItem>your favorite editor </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H>Create your own app</H>
          <Text textColor="primary"><code>$ npx create-react-app my-app</code></Text>
        </Slide>



        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H textColor="primary">Lesson Header</H>
          <Heading textColor="primary" size={5}>Objectives:</Heading>
          <List>
            refactor the header to a Header component:
              <CodePane source='<Header>Welcome to React</Header>' /> <br />
            make showing logo optional by using props:
              <CodePane source='<Header logo>Welcome to React</Header>' /> <br />

            make a button, that toggles the logo:
              <CodePane lang='javascript' source={`constructor() {
    super()
    this.state = { showIcon: true }
  }
`} /> <br />
          </List>
          <Text textColor="primary" textSize={18}>for solution type: <br />
            <code>$ git clone git@digital-automotive-engineering.com:switajskim/react-workshop.git</code>
          </Text>
        </Slide>



        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>
          <H>Lesson TodoApp</H>
          <Heading textColor="primary" size={5}>Objectives:</Heading>
          <List>
            <ListItem>make todos addable</ListItem>
            <ListItem>make todos checkable / uncheckable</ListItem>
          </List>
          <Text textColor="primary" textSize={18}>for solution type: <br />
            <code>$ git clone git@digital-automotive-engineering.com:switajskim/react-workshop.git</code>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>

          <CodePane
            lang="jsx"
            source={
              `
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
    
    export default App;`
            }
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

      </Deck >
    );
  }
}

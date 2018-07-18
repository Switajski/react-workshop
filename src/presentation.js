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
    const Li = (props) => <ListItem textSize={28} {...props}>{props.children}</ListItem>

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React workshop 19th July, 2018
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            at IT-Manufactory
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>Agenda</Heading>
          <List>
            <ListItem>Introduction to react</ListItem>
            <ListItem>Basics</ListItem>
            <ListItem>Hands on code: Install tools</ListItem>
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
          <Heading size={3} textColor="primary">React - the bad</Heading>
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
          <Heading size={3} textColor="primary">Create your own app</Heading>
          <Text textColor="primary"><code>$ npx create-react-app my-app</code></Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>Basics</Heading>
          <Text textColor="primary">Lesson Header: please </Text>
          <List>
            <ListItem>Combining HTML and JSX</ListItem>
            <ListItem>State</ListItem>
            <ListItem>Props</ListItem>
            <ListItem>Controlled vs uncontrolled components</ListItem>
          </List>

        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1}>
          <CodePane
            lang="jsx"
            source={
              `class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
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
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}`
            }
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

      </Deck>
    );
  }
}

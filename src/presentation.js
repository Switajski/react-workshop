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
import TodoAppCode from './TodoAppCode';
import JsonEndpointCode from './JsonEndpointCode';
import JsonServletCode from './JsonServletCode';
import FetchCode from './FetchCode'
import ProxyConfig from './ProxyConfig';
import WebXmlConfig from './WebXmlConfig';

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
    const S = props => <Slide transition={["fade"]} bgColor="secondary" textColor="primary" textSize={1} {...props} />

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
              <CodePane source='<Header logo={true}>Welcome to React</Header>' /> <br />

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
            source={TodoAppCode}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H>Migration of <br /><code>da-strategyreport</code></H>
          <Heading textColor="primary">backend</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>Configure a JAX-RS Servlet by creating an < br />
            <code>@ApplicationPath</code>-annotated class < br />
            and let it extend <code>javax.ws.rs.core.Application</code></List>
          <CodePane lang='java' source={JsonServletCode} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>Create an JSON Endpoint by creating a < br />
            <code> @Path</code>-annotated class < br />
            with a <code>javax.ws.rs.GET</code> annotated method</List>
          <CodePane lang='java' source={JsonEndpointCode} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H>Migration of <br /><code>da-strategyreport</code></H>
          <Heading textColor="primary">frontend</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>Fetch data at page load< br />
          </List>
          <CodePane lang='jsx' source={FetchCode} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>Configure <code>package.json</code> to let the development server proxy API requests to port 8181< br />
          </List>
          <CodePane lang='jsx' source={ProxyConfig} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>On Backend: Enable basic authentication by modifying <code>web.xml</code>
          </List>
          <CodePane lang='xml' source={WebXmlConfig} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H>Problems with CSS at scale</H>
          <List>
            <ListItem>Global namespace</ListItem>
            <ListItem>Dependencies</ListItem>
            <ListItem>Dead code elimination</ListItem>
            <ListItem>Minification</ListItem>
            <ListItem>Sharing constants</ListItem>
            <ListItem>Isolation</ListItem>
          </List>
          <Text textColor="primary">with in scale I mean lot of components and lot of no-frontend-developers</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <H>Backup</H>
          <List>
            <ListItem>
              <Link textColor="primary" href='http://www.se-radio.net/2018/06/se-radio-episode-327-glynn-bird-on-developer-productivity-with-open-source/'>Open source community, dealings in Github (Pod cast) </Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href='https://medium.com/@_alanbsmith/why-we-use-styled-components-at-decisiv-a8ac6e1507ac'>Why We Use Styled Components at Decisiv </Link>
            </ListItem>
            <ListItem>
              <Link textColor="primary" href='https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b'>
                CSS Evolution: From CSS, SASS, BEM, CSS Modules to Styled Components</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck >
    );
  }
}

import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import Name from './components/Name'
import Pic from './components/Pic'
import Contact from './components/Contact'
import Editor from './components/Editor'
const apiURL = 'http://localhost:3000/api/v1/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      honors: [],
      interests: [],
      jobs: [],
      links: [],
      skills: []
    }
  }

  componentDidMount() {
    fetch(apiURL+'honors')
    .then(res => res.json())
    .then(honors => this.setState({honors}))

    fetch(apiURL+'interests')
    .then(res => res.json())
    .then(interests => this.setState({interests}))

    fetch(apiURL+'jobs')
    .then(res => res.json())
    .then(jobs => this.setState({jobs}))

    fetch(apiURL+'links')
    .then(res => res.json())
    .then(links => this.setState({links}))

    fetch(apiURL+'skills')
    .then(res => res.json())
    .then(skills => this.setState({skills}))

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div>
          <Name /> <Pic />
        </div>
        <div>
          <Editor />
        </div>
          <Contact />
      </div>
    );
  }
}

export default App;
//import logo from './logo.svg';
/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */

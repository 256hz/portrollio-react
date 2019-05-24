import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import NamePic from './components/NamePic'
import Contact from './components/Contact'
import Editor from './components/Editor'
import Jobs from './components/Jobs'
import BioIntro from './components/BioIntro'

const apiURL = 'http://localhost:3000/api/v1/'
// as long as we keep users & currentUser at the end, we can add states
// to this list and it will automatically fetch them
const DEFAULT_STATE = {
  honors: [],
  interests: [],
  jobs: [],
  links: [],
  skills: [],
  users: [],
  currentUser: {
    // first_name: "", last_name: "", email: "", phone: "", intro: "", bio: ""
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = DEFAULT_STATE
  }

  componentDidMount() {
    let fetches = Object.keys(DEFAULT_STATE) // keys of the default state are the api pathnames
    fetches.pop(2) //so it doesn't try to fetch users & currentUser

    fetches.forEach( f => {
      fetch( apiURL + f )
      .then( res => res.json() )
      .then( json => this.setState({[f]: json}))
    })

    fetch( apiURL + 'users')
    .then( res => res.json() )
    .then( users => {
      this.setState({users})
      this.setState({currentUser: users[0]})
    })
    
  }

  render() {
    return (
      <div className="App">
        <Nav />

          <NamePic user={this.state.currentUser}/>
          <BioIntro user={this.state.currentUser}/>
          <Jobs jobs={this.state.jobs}/>
          <Editor user={this.state.currentUser}/>

          <Contact user={this.state.currentUser}/>
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

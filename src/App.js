import React from 'react';
import './App.css';
import Nav from './components/Nav'
import NamePic from './components/NamePic'
import Contact from './components/Contact'
import Editor from './components/Editor'

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <NamePic /> 
      </div>
      <div>
        <Editor />
      </div>
        <Contact />
    </div>
  );
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

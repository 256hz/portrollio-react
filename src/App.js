import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Name from './components/Name'
import Pic from './components/Pic'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Name /> <Pic />
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

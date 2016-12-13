import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import fetch from 'isomorphic-fetch';
class App extends Component {

  componentDidMount() {
    // $.get('/fruits', (data) => {
    //   console.log(data);
    // })
    fetch('/fruits')
      .then(response => response.json())
      .then(fruits => console.log(fruits))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

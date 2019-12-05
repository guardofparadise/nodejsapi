import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getData = () => {
    fetch(`/api/v1/bootcamps/1`)
      .then(res => res.json())
      .then(res => console.log(res))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            onClick={this.getData}
          >
            Learn React
          </button>
        </header>
      </div>
    );    
  }
}

export default App;

import React, { Component } from 'react';
import { Button, createClient } from 'package-dom';
import logo from './logo.svg';
import './App.css';

const client = createClient();

class App extends Component {
  onClick = () => client.print();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DOM</h1>
        </header>
        <section className="App-intro">
          <Button onClick={this.onClick} />
        </section>
      </div>
    );
  }
}

export default App;

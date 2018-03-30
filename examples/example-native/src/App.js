import React, { Component } from 'react';
import { Touchable, createClient } from 'package-native';
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
          <h1 className="App-title">Welcome to Native</h1>
        </header>
        <section className="App-intro">
          <Touchable onClick={this.onClick} />
        </section>
      </div>
    );
  }
}

export default App;

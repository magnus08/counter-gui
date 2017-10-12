import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchStuff(); // TODO: Hack
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter</h1>
        </header>
        <div>
          <EventList />
        </div>
      </div>
    );
  }
}


const fetchStuff = () => {
  const projects = [
    {
      "name": "A event",
      "type": "item",
      "energy": 42,
      "user": 1
    },
    {
      "name": "Another event",
      "type": "item",
      "energy": 43,
      "user": 1
    },
    {
      "name": "A bite for usr 2",
      "type": "item",
      "energy": 21,
      "user": 2
    }
  ];

  export default App;

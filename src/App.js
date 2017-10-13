import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './components/EventList';
import {connect} from 'react-redux'


class App extends Component {
  componentDidMount() {
    fetchStuff(); // TODO: Hack
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


const fetchStuff = async () => {
  let events = await fetch('http://localhost:6001/api/user/1/events');

  console.log("Data = ", events);
  // const events = [
  //   {
  //     "id": 0,
  //     "name": "A event",
  //     "type": "item",
  //     "energy": 42,
  //     "user": 1
  //   },
  //   {
  //     "id": 1,
  //     "name": "Another event",
  //     "type": "item",
  //     "energy": 43,
  //     "user": 1
  //   },
  //   {
  //     "id": 2,
  //     "name": "A bite for usr 2",
  //     "type": "item",
  //     "energy": 21,
  //     "user": 2
  //   }
  // ];
  // return (dispatch) => {
  //   dispatch({
  //     type: 'READING_EVENTS'
  //   });
  //   setTimeout(() => dispatch({
  //     type: 'READ_EVENTS',
  //     events
  //   }), 2000);
  // }
};
const mapStateToProps = (state, ownProps) => (
  state // TODO: Just passing on state here, does not seem correct
);

export default connect(
  mapStateToProps,
  {
  }
)(App);

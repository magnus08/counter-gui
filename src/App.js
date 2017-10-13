import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './components/EventList';
import {connect} from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.props.fetchStuff(this.props.userId); // TODO: Not sure exactly how this work, research it!
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


const fetchStuff = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: 'READING_EVENTS'
    });
    const events = await(await fetch(`http://localhost:6001/api/user/${userId}/events`)).json();
    console.log("events = ", events);
    dispatch({
      type: 'READ_EVENTS',
      events
    });
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.events.userId
  }
};

export default connect(
  mapStateToProps,
  {
    fetchStuff: fetchStuff
  }
)(App);

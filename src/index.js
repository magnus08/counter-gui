import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import './semantic-ui/semantic.min.css';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import App from './App'


const reducer = combineReducers({
  events
});

function events(state = {events: [], initializing: false, userId: 1}, action) {
  console.log("action: ", action);
  if (action.type === 'READ_EVENTS') {
    console.log("ProjectReducer: READ_EVENTS", action);
    return {
      ...state,
      initializing: false,
      events: action.events,
    };
  } else if (action.type === 'READING_EVENTS') {
    return {
      ...state,
      initializing: true
    };
  } else {
    return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

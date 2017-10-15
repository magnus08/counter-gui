import React from 'react';
import Event from './Event';
import AddEvent from './AddEvent';
import {connect} from 'react-redux'

const EventList = (props) => {

  const eventComponents = props.events.map((event) => (
    <Event
      key={'event-' + event.id}
      id={event.id}
      name={event.name}
      energy={event.energy}
      user={event.user}
      type={event.type}
    />
  ));

  return (
    <div>
      {
        props.initializing?
        (
          <h1>Loading...</h1>
        )
        :
        (
          <div className='ui one column relaxed grid'>
            <div className="column">
              <table className="ui blue right aligned table">
                <thead>
                  <tr>
                    <th className="left aligned">Name</th>
                    <th className="left aligned">Energy</th>
                    <th className="left aligned">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {eventComponents}
                </tbody>
              </table>
              <AddEvent

              />
            </div>
          </div>
        )
      }
    </div>
  )
}

const addNew = (userId) => {
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

const mapStateToProps = (state) => {
  const props = {
    events: state.event.events,
    initializing: state.event.initializing,
    userId: state.event.userId,
  }
  console.log("*** ", props);
  return props;
};

export default connect(
  mapStateToProps,
  (dispatch) => ({})
)(EventList);

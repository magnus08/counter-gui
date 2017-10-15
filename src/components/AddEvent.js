import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const AddEvent = (props) => {
  const handleAddEvent = () => {
    props.doAdd(props.userId);
  }

  return (
    <button className="ui button" onClick={handleAddEvent}>
      Add props.lol
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.event.userId,
  };
};

const doAdd = (userId) => {
  return async (dispatch) => {
    const newEvent = {
      userId,
      name: "The new one",
      type: "item",
      energy: 17
    }
    const res = await(await fetch(`http://localhost:6001/api/user/${userId}/event`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newEvent)
    })).json();
    console.log("res = ", res);
    dispatch({
      type: 'ADD_EVENT',
      event: res // Probably use res instead
    });
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    doAdd: doAdd
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);

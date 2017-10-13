import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const Event = (props) => {
  return (
    <tr>
      <td className='center aligned'>
        {props.title}
      </td>
    </tr>
  );
}

const mapStateToProps = (state) => {
  const events = state.events;
  console.log("*** events state: ", state.events);
  return {
    events,
  };
};

const mapDispatchToProps = (dispatch) => {
  // TODO: I have no clue why i need to use bindActionCreators here, it should just work with thunks
  return bindActionCreators({
    // actionAutoDeploy: (id) => ({
    //   type: 'TOGGLE_PROJECT_AUTODEPLOY',
    //   id: id
    // }),
    // actionRedeploy: (id) => (dispatch) => {
    //   dispatch({
    //     type: 'TRIGGER_PROJECT_REDEPLOY',
    //     id: id
    //   });
    //   return setTimeout(() => dispatch({
    //     type: 'PROJECT_DEPLOY_DONE',
    //     id: id
    //   }), 2000)
    // },
    // actionRebuild: (id) => (dispatch) => {
    //   dispatch({
    //     type: 'TRIGGER_PROJECT_REBUILD',
    //     id: id
    //   });
    //   return setTimeout(() => dispatch({
    //     type: 'PROJECT_REBUILD_DONE',
    //     id: id
    //   }), 4000);
    // }
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

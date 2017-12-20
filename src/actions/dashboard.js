import {
  GET_CURRENT_STATE,
  TOGGLE_DEVICE,
  SET_MODE
} from 'constants/actionTypes';

import api from 'api';

export const getCurrentState = () => (dispatch, getState) => {
  Promise.all([api.getCurrentState(), api.getStats()])
    .then(res => {
      dispatch({
        type: GET_CURRENT_STATE,
        payload: {
          ...res[0].data,
          stats: res[1].data
        }
      });
    })
    .catch(e => console.log(e));
};

export const toggleDevice = () => (dispatch, getState) => {
  api.toggleDevice()
    .then(res => dispatch({ type: TOGGLE_DEVICE }))
    .catch(e => console.log(e));
};

export const setMode = (mode) => (dispatch, getState) => {
  api.setMode(mode)
    .then(res => dispatch({ type: SET_MODE }))
    .catch(e => console.log(e));
};
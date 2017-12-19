import {
  GET_CURRENT_STATE
} from 'constants/actionTypes';

import api from 'api';

export const getCurrentState = () => (dispatch, getState) => {
  api.getCurrentState()
    .then((res) => {
      dispatch({
        type: GET_CURRENT_STATE,
        payload: res.data
      });
    })
    .catch(e => {
      console.log(e)
    });
};

import {
  GET_PINS_REQUEST,
  GET_PINS_SUCCESS,
  GET_PINS_FAILURE,
  SHOW_PIN_POPUP,
  HIDE_PIN_POPUP,
  SHOW_ERROR
} from 'constants/actionTypes';

import api from 'api';

export const getPins = (offset = 0, limit = 10) => (dispatch, getState) => {
  dispatch({ type: GET_PINS_REQUEST });

  api.getPins(offset, limit)
    .then((res) => {
      dispatch({
        type: GET_PINS_SUCCESS,
        payload: res.data
      });
    })
    .catch(e => {
      console.log(e)
      dispatch({
        type: 'SHOW_ERROR',
        payload: 'Error: Cannot load pins'
      });
    });
};

export const showPinPopup = id => ({
  type: SHOW_PIN_POPUP,
  payload: id
});

export const hidePinPopup = () => ({ type: HIDE_PIN_POPUP });
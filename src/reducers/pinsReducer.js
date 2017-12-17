import {
  GET_PINS_REQUEST,
  GET_PINS_SUCCESS,
  GET_PINS_FAILURE,
  SHOW_PIN_POPUP,
  HIDE_PIN_POPUP
} from 'constants/actionTypes';

const initialState = {
  pins: [],
  focusedPin: '',
  gettingPins: false,
  pinsLeft: 0
};

const pinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PINS_REQUEST: {
      return {
        ...state,
        gettingPins: true
      };
    }

    case GET_PINS_SUCCESS: {
      const { pins, pinsLeft } = action.payload;
      return {
        ...state,
        pins: [...state.pins, ...pins],
        pinsLeft,
        gettingPins: false
      };
    }
    case GET_PINS_FAILURE: {
      return {
        ...state,
        gettingPins: false
      };
    }
    case SHOW_PIN_POPUP: {
      return {
        ...state,
        focusedPin: action.payload
      }
    }
    case HIDE_PIN_POPUP: {
      return {
        ...state,
        focusedPin: ''
      }
    }
    default: {
      return state;
    }
  }
};

export default pinReducer;
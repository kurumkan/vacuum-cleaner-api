import {
  GET_CURRENT_STATE
} from 'constants/actionTypes';

const initialState = {
  isOn: false,
  mode: 'dry',
  power: 0,
  deviceInfo: null
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_STATE: {
      return {
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default dashboardReducer;
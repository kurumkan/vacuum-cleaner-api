import {
  GET_CURRENT_STATE,
  GET_STATS,
  TOGGLE_DEVICE,
  SET_MODE
} from 'constants/actionTypes';

const initialState = {
  isOn: false,
  mode: 'dry',
  power: 0,
  deviceInfo: null,
  stats: null
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_STATE: {
      const { isOn, mode, power, deviceInfo, stats } = action.payload;
      return {
        ...state,
        isOn,
        mode,
        power,
        deviceInfo,
        stats
      };
    }
    case TOGGLE_DEVICE: {
      return {
        ...state,
        isOn: !state.isOn
      };
    }
    case SET_MODE: {
      return {
        ...state,
        mode: action.payload === 'dry' ? 'dry' : 'wash'
      }
    }
    default: {
      return state;
    }
  }
};

export default dashboardReducer;
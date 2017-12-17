import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pinsReducer from 'reducers/pinsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  pins: pinsReducer
});

export default rootReducer;

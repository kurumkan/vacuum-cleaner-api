import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dashboardReducer from 'reducers/dashboardReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  dashboard: dashboardReducer
});

export default rootReducer;

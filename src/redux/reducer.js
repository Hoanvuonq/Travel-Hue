import { combineReducers } from 'redux';
import heritageReducer from './heritageSlice';

const rootReducer = combineReducers({
  heritage: heritageReducer,
});

export default rootReducer;

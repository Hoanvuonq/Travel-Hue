import { combineReducers } from 'redux';
import heritageReducer from './heritageSlice';
import specialTourReducer from '../components/modules/home/SpecialTourSection/SpecialTourSlice';

const rootReducer = combineReducers({
  heritage: heritageReducer,
  specialTour: specialTourReducer,
});

export default rootReducer;

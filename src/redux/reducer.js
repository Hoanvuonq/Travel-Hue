import { combineReducers } from 'redux';
import heritageReducer from './heritageSlice';
import specialTourReducer from '../components/modules/home/SpecialTourSection/SpecialTourSlice';
import appReducer from './slice/app'

const rootReducer = combineReducers({
  heritage: heritageReducer,
  specialTour: specialTourReducer,
  app: appReducer
});

export default rootReducer;

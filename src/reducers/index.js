import { combineReducers } from 'redux';
import { jobsReducer } from './jobsReducer';
import { cityReducer } from './cityReducer';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  cities: cityReducer
});
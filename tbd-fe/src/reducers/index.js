import { combineReducers } from 'redux';
import { jobsReducer, currentJob, loading, error } from './jobsReducer';
import { cityReducer, currentCity } from './cityReducer';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  currentJob: currentJob,
  cities: cityReducer,
  currentCity, currentCity,
  loading,
  error
});
import { combineReducers } from 'redux';
import { jobsReducer, currentJob, loading, error } from './jobsReducer';
import { cityReducer, currentCity } from './cityReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  currentJob: currentJob,
  cities: cityReducer,
  currentCity,
  loading,
  error,
  login: userReducer
});
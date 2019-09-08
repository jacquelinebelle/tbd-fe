import { combineReducers } from 'redux';
import { jobsReducer, loading, error } from './jobsReducer';
import { cityReducer } from './cityReducer';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  cities: cityReducer,
  loading,
  error
});
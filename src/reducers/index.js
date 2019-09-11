import { combineReducers } from 'redux';
import { jobsReducer, loading, error } from './jobsReducer';
import { cityReducer } from './cityReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  cities: cityReducer,
  loading,
  error,
  login: userReducer
});
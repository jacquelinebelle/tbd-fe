import { combineReducers } from 'redux';
<<<<<<< HEAD:src/reducers/index.js
import { jobsReducer, loading, error } from './jobsReducer';
import { cityReducer } from './cityReducer';
import { userReducer } from './userReducer';
=======
import { jobsReducer, currentJob, loading, error } from './jobsReducer';
import { cityReducer, currentCity } from './cityReducer';
>>>>>>> 48d1e49983ce113dd28c60552d4799e666699459:tbd-fe/src/reducers/index.js

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  currentJob: currentJob,
  cities: cityReducer,
  currentCity, currentCity,
  loading,
  error,
  login: userReducer
});
import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from '../domains/Project/projectSlice';

const rootReducer = combineReducers({
  project: projectReducer,
});

export default rootReducer;
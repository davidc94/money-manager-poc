import { combineReducers } from 'redux';
import bankReducers from './banks/reducer';

const rootReducer = combineReducers({
  bankReducers,
});

export default rootReducer;

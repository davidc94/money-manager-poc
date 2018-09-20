import { combineReducers } from 'redux';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
});

export default rootReducer;

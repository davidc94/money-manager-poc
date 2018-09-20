import { combineReducers } from 'redux';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';
import income from './dashboard/income/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
  income,
});

export default rootReducer;

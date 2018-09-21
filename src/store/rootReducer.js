import { combineReducers } from 'redux';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';
import income from './dashboard/income/reducer';
import spending from './dashboard/spending/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
  income,
  spending,
});

export default rootReducer;

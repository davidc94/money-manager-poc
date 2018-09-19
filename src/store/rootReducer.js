import { combineReducers } from 'redux';
import incomeReducers from './dashboard/income/reducer';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
  incomeReducers,
});

export default rootReducer;

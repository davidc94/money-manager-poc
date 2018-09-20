import { combineReducers } from 'redux';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';
import incomeReducers from './dashboard/income/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
  incomeReducers,
});

export default rootReducer;

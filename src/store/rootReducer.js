import { combineReducers } from 'redux';
import bank from './banks/reducer';
import bankBalance from './dashboard/bankBalance/reducer';
import income from './dashboard/income/reducer';
import login from './login/reducer';

const rootReducer = combineReducers({
  bank,
  bankBalance,
  income,
  login,
});

export default rootReducer;

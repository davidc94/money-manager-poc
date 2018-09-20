import { all } from 'redux-saga/effects';
import fetchDataWatcher from './banks/sagas';
import fetchBankBalanceWatcher from './dashboard/bankBalance/sagas';

export default function* rootSagas() {
  yield all([
    fetchDataWatcher(),
    fetchBankBalanceWatcher(),
  ]);
}

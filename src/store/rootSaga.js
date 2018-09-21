import { all } from 'redux-saga/effects';
import fetchDataWatcher from './banks/sagas';
import fetchBankBalanceWatcher from './dashboard/bankBalance/sagas';
import fetchIncomeWatcher from './dashboard/income/sagas';
import fetchSpendingWatcher from './dashboard/spending/sagas';

export default function* rootSagas() {
    yield all([
        fetchDataWatcher(),
        fetchBankBalanceWatcher(),
        fetchIncomeWatcher(),
        fetchSpendingWatcher(),
    ]);
}

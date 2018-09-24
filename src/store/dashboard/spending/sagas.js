import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_SPENDING, FETCH_SPENDING_FULFILLED } from '../../constants';
import data from '../../../data/spending.json';

export function* fetchingSpending(action, spendingData = data) {
  try {
    yield put({ type: FETCH_SPENDING_FULFILLED, payload: spendingData });
  } catch (error) {
    console.log('fetchingSpending ==> ', error);
  }
}

export default function* fetchSpendingWatcher() {
  yield takeLatest(FETCH_SPENDING, fetchingSpending);
}

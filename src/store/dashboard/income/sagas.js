import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_INCOME_DATA, FETCH_INCOME_DATA_FULFILLED } from '../../constants';
import data from '../../../data/income.json';

export function* fetchingIncomeData() {
  try {
    yield put({ type: FETCH_INCOME_DATA_FULFILLED, payload: data });
  } catch (error) {
    console.log('fetchingIncomeData ==> ', error);
  }
}

export default function* fetchIncomeWatcher() {
  yield takeLatest(FETCH_INCOME_DATA, fetchingIncomeData);
}

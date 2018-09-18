import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_BANK_DATA, FETCH_BANK_DATA_FULFILLED } from '../constants';
import data from '../../data/banks.json';

function* fetchingBankData() {
  try {
    yield put({ type: FETCH_BANK_DATA_FULFILLED, payload: data });
  } catch (error) {
    console.log('fetchingBankData ==> ', error);
  }
}

export function* fetchDataWatcher() {
  yield takeLatest(FETCH_BANK_DATA, fetchingBankData);
}

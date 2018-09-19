import { all } from 'redux-saga/effects';
import fetchDataWatcher from './banks/sagas';

export default function* rootSagas() {
  yield all([
    fetchDataWatcher(),
  ]);
}

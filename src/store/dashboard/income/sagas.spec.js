import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest } from 'redux-saga/effects';
import fetchIncomeWatcher, { fetchingIncomeData } from './sagas';
import { FETCH_INCOME_DATA, FETCH_INCOME_DATA_FULFILLED } from '../../constants';

describe('Choose income saga ', () => {
  it('should fetch income data', () => {
    const data = {
      income: [
        {
          date: 'June 1',
          title: 'Capital Resourcing',
          amount: 1200,
        },
        {
          date: 'June 2',
          title: 'PayPal',
          amount: 110,
        },
      ],
    };
    const generator = cloneableGenerator(fetchingIncomeData)();

    expect(generator.next().value).toEqual(put({
      type: FETCH_INCOME_DATA_FULFILLED, payload: data,
    }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchIncomeWatcher)();
    expect(generator.next().value)
      .toEqual(
        takeLatest(FETCH_INCOME_DATA, fetchingIncomeData),
      );
  });
});

import { cloneableGenerator } from 'redux-saga/utils';
import { put } from 'redux-saga/effects';
import { fetchingBankData } from './sagas';
import { FETCH_BANK_DATA_FULFILLED } from '../constants';


describe('Choose bank saga ', () => {
  it('Should fetch bank data', () => {
    const data = [{
      bankName: 'Barclays',
      logoImage: 'barclayslogo',
    }, {
      bankName: 'Lloyds',
      logoImage: 'lloydslogo',
    }, {
      bankName: 'HSBC',
      logoImage: 'hsbclogo',
    }];
    const generator = cloneableGenerator(fetchingBankData)();

    expect(generator.next().value).toEqual(put({ type: FETCH_BANK_DATA_FULFILLED, payload: data }));
  });
});

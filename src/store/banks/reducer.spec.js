import { FETCH_BANK_DATA_FULFILLED } from '../constants';
import bankReducers from './reducer';

describe('Banks reducer', () => {
  it('should return the initial state', () => {
    expect(bankReducers(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_BANK_DATA_FULFILLED', () => {
    const action = {
      type: FETCH_BANK_DATA_FULFILLED,
      payload: 'Natwest',
    };

    const expectedState = {
      bankList: 'Natwest',
    };

    expect(bankReducers({}, action)).toEqual(expectedState);
  });
});

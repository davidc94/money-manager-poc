import { FETCH_BANK_DATA_FULFILLED } from '../constants';

export default function bankReducers(state = [], action) {
  switch (action.type) {
    case FETCH_BANK_DATA_FULFILLED:
      return Object.assign({}, state, { bankList: action.payload });

    default: return state;
  }
}

import { FETCH_BANK_DATA_FULFILLED, SELECTED_BANK_DATA } from '../constants';

export default function bankReducers(state = [], action) {
  switch (action.type) {
    case FETCH_BANK_DATA_FULFILLED:
      return Object.assign({}, state, { bankList: action.payload });
    case SELECTED_BANK_DATA:
      return Object.assign({}, state, { selectedBank: action.payload });

    default: return state;
  }
}

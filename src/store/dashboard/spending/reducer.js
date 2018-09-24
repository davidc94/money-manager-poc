import { FETCH_SPENDING_FULFILLED } from '../../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SPENDING_FULFILLED:
      return Object.assign({}, state, { data: action.payload });

    default: return state;
  }
}

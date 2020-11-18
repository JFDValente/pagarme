import { formatTransaction } from '../../helpers/formatter';
import {
  SET_LIST_TRANSACTIONS,
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case SET_LIST_TRANSACTIONS:
    {
      const transactions = action.transactions.map((item) => formatTransaction(item));
      return [
        ...state,
        ...transactions,
      ];
    }
    default:
      return state;
  }
};

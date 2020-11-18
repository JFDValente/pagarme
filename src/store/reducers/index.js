import { formatResponse } from '../../helpers/formatter';
import {
  SET_LIST_TRANSACTIONS,
  SET_TRANSACTION,
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case SET_LIST_TRANSACTIONS:
    {
      const transactions = action.transactions.map((item) => formatResponse(item));
      return [
        ...state,
        ...transactions,
      ];
    }
    case SET_TRANSACTION:
    {
      const newTransaction = action.transaction;
      newTransaction.status = 'Processando';
      return [
        ...state,
        newTransaction,
      ];
    }
    default:
      return state;
  }
};

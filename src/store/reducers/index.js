import { formatResponse, formatStatus } from '../../helpers/formatter';
import {
  SET_LIST_TRANSACTIONS,
  SET_TRANSACTION,
  UPDATE_TRANSACTION,
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
    case UPDATE_TRANSACTION:
    {
      const index = state.findIndex(t => t.syncId === action.syncId);
      state[index].id = action.id;
      state[index].status = formatStatus(action.status);
      delete state[index].syncId;
      return [
        ...state,
      ];
    }
    default:
      return state;
  }
};

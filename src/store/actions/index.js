export const SET_LIST_TRANSACTIONS = 'SET_LIST_TRANSACTIONS';
export const SET_TRANSACTION = 'SET_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_STATUS_TRANSACTION';

function setListTransactions(transactions) {
  return {
    type: SET_LIST_TRANSACTIONS,
    transactions,
  };
}

function setTransaction(transaction) {
  return {
    type: SET_TRANSACTION,
    transaction,
  };
}

function updateTransaction(syncId, id, status) {
  return {
    type: UPDATE_TRANSACTION,
    syncId,
    id,
    status,
  };
}

export {
  setListTransactions,
  setTransaction,
  updateTransaction,
};

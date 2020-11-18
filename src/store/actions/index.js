export const SET_LIST_TRANSACTIONS = 'SET_LIST_TRANSACTIONS';
export const SET_TRANSACTION = 'SET_TRANSACTION';

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

export {
  setListTransactions,
  setTransaction,
};

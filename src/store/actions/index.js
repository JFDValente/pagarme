export const SET_LIST_TRANSACTIONS = 'SET_LIST_TRANSACTIONS';

function setListTransactions(transactions) {
  return {
    type: SET_LIST_TRANSACTIONS,
    transactions,
  };
}

export {
  setListTransactions,
};

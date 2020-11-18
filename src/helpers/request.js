const server = 'http://localhost:3000/';

const getTransactions = () => {
  return fetch(`${server}transactions`)
    .then(response => response.json())
};

const createTransaction = (payload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };

  return fetch(`${server}transactions`, requestOptions)
    .then(response => response.json())
};

export {
  getTransactions,
  createTransaction,
};

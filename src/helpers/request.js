const server = 'http://localhost:3000/';

const getTransactions = () => {
  return fetch(`${server}transactions`)
    .then(response => response.json())
};

export {
  getTransactions,
};

const formatTransaction = (transaction) => ({
    id: transaction.id,
    name: transaction.credit_card_holder_name,
    cardNumber: transaction.credit_card_number,
    expireDate: transaction.credit_card_expiration_date,
    cvv: transaction.credit_card_cvv,
    date: '10/10/2010 10:30',
    status: formatStatus(transaction.status),
    value: transaction.amount,
});

const formatStatus = (status) => {
  switch (status) {
    case 'refused':
      return 'Recusada';
    case 'paid':
      return 'Paga';
    default:
      return 'Processando';
  }
}

export {
  formatTransaction,
};

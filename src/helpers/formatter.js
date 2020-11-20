const formatResponse = (transaction) => ({
    id: transaction.id,
    name: transaction.credit_card_holder_name,
    cpf: transaction.buyer_document,
    cardNumber: transaction.credit_card_number,
    expireDate: transaction.credit_card_expiration_date,
    cvv: transaction.credit_card_cvv,
    date: (transaction.date ? new Date(transaction.date) : new Date()),
    status: formatStatus(transaction.status, transaction.id),
    value: transaction.amount,
});

const formatRequest = (transaction) => ({
  buyer_document: transaction.cpf,
  credit_card_holder_name: transaction.name,
  credit_card_number: transaction.cardNumber,
  credit_card_expiration_date: transaction.expireDate,
  credit_card_cvv: transaction.cvv,
  amount: transaction.value,
  date: transaction.date,
});

const formatStatus = (status, id = null) => {
  switch (status) {
    case 'refused':
      return 'Recusada';
    case 'paid':
      return 'Paga';
    default:
    {
      if (!id) return 'Enviando';
      return 'Falhou';
    }
  }
}

export {
  formatRequest,
  formatResponse,
  formatStatus,
};

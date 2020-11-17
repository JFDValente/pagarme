const isDataValid = (cpf, cardNumber, expireDate, cvv, transactionValue) => {
  if (!validCPF(cpf)) {
    return false
  }

  if (!validCardNumber(cardNumber)) {
    return false
  }

  if (!validExpireDate(expireDate)) {
    return false
  }

  if (!validCvv(cvv)) {
    return false
  }

  if (!validTransactionValue(transactionValue)) {
    return false
  }

  return true
}

const validCPF = (cpf) => true;

const validCardNumber = (cardNumber) => true;

const validExpireDate = (expireDate) => true;

const validCvv = (cvv) => true;

const validTransactionValue = (transactionValue) => true;

export {
  isDataValid,
};

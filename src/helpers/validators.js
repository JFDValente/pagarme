const isDataValid = (name, cpf, cardNumber, expireDate, cvv, transactionValue) => {
  if (!validName(name)) {
    return false
  }

  if (!cpf || !validCPF(cpf)) {
    return false
  }

  if (!cardNumber || !validCardNumber(cardNumber)) {
    return false
  }

  if (!expireDate || !validExpireDate(expireDate)) {
    return false
  }

  if (!cvv || !validCvv(cvv)) {
    return false
  }

  if (!transactionValue || !validTransactionValue(Number(transactionValue)/100)) {
    return false
  }

  return true
}

const validName = (name) => name.length >= 2;
const validCPF = (cpf) => testCPF(cpf);
const validCardNumber = (cardNumber) => cardNumber.length === 16;
const validExpireDate = (expireDate) => (expireDate.length === 4 ? true : false);
const validCvv = (cvv) => (cvv.length === 3 ? true : false);
const validTransactionValue = (transactionValue) => (transactionValue > 0 ? true : false);

function testCPF(cpf) {
  let sum = 0;
  let rest;
  if (cpf === '00000000000') return false;

  for (let i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);

  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11))  rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10)) ) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11))  rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11) ) ) return false;
  return true;
}

export {
  isDataValid,
};

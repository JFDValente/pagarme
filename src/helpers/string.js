const formatCPF = (cpf) => {
  const value = filterCPF(cpf);
  if (value.length < 11) return value;
  return value.substr(0,11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const formatCardNumber = (cardNumber) => {
  const value = filterCardNumber(cardNumber);
  if (value.length < 16) return value;
  return value.substr(0,16).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}

const formatExpireDate = (expireDate) => {
  const value = filterExpireDate(expireDate);
  if (value.length < 4) return value;
  return value.substr(0,4).replace(/(\d{2})(\d{2})/, "$1/$2");
}

const formatCVV = (CVV) => {
  const value = filterCVV(CVV);
  return value.substr(0,3);
}

const filterCPF = (cpf) => {
  return cpf.replace(/[^\d]/g, "");
}

const filterCardNumber = (cardNumber) => {
  return cardNumber.replace(/[^\d]/g, "");
}

const filterExpireDate = (expireDate) => {
  return expireDate.replace(/[^\d]/g, "");
}

const filterCVV = (CVV) => {
  return CVV.replace(/[^\d]/g, "");
}

export default {
  formatCPF,
  formatCardNumber,
  formatExpireDate,
  formatCVV,
  filterCPF,
  filterCardNumber,
  filterExpireDate,
  filterCVV,
};

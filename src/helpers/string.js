const formatCpf = (cpf) => {
  const value = filterCpf(cpf);
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

const formatDate = (date) => {
  const datePart = date.toLocaleDateString('pt-BR');
  const timePart = date.toLocaleTimeString('pt-BR').substr(0,5);
  return `${datePart} ${timePart}`;
}

const formatCvv = (cvv) => {
  const value = filterCvv(cvv);
  return value.substr(0,3);
}

const filterCpf = (cpf) => {
  return cpf.replace(/[^\d]/g, "");
}

const filterCardNumber = (cardNumber) => {
  return cardNumber.replace(/[^\d]/g, "");
}

const filterExpireDate = (expireDate) => {
  return expireDate.replace(/[^\d]/g, "");
}

const filterCvv = (cvv) => {
  return cvv.replace(/[^\d]/g, "");
}

export default {
  formatCpf,
  formatCardNumber,
  formatExpireDate,
  formatCvv,
  formatDate,
  filterCpf,
  filterCardNumber,
  filterExpireDate,
  filterCvv,
};

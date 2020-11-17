const formatCPF = (cpf) => {
  const value = cpf.replace(/[^\d]/g, "");
  if (value.length < 11) return value;
  return value.substr(0,11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const formatCardNumber = (cardNumber) => {
  const value = cardNumber.replace(/[^\d]/g, "");
  if (value.length < 16) return value;
  return value.substr(0,16).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}

const formatExpireDate = (expireDate) => {
  const value = expireDate.replace(/[^\d]/g, "");
  if (value.length < 6) return value;
  return value.substr(0,6).replace(/(\d{2})(\d{4})/, "$1/$2");
}

const formatCVV = (CVV) => {
  const value = CVV.replace(/[^\d]/g, "");
  return value.substr(0,3);
}

export default {
  formatCPF,
  formatCardNumber,
  formatExpireDate,
  formatCVV,
};

const formatCurrency = (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

const formatCurrencyInput = (value) => (!value ? '' : value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

export default {
  formatCurrency,
  formatCurrencyInput,
  formatNumber,
};

import React, { useEffect, useState } from 'react';

import InputField from '../../atoms/InputField';

import string from '../../helpers/string';
import number from '../../helpers/number';
import { isDataValid } from '../../helpers/validators';

import Style from './CreateForm.style';

import info from './data';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [CVV, setCVV] = useState('');
  const [transactionValue, setTransactionValue] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeCPF = (e) => {
    const formattedCPF = string.formatCPF(e.target.value);
    setCPF(formattedCPF);
  }

  const onChangeCardNumber = (e) => {
    const formattedCardNumber = string.formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
  }

  const onChangeExpireDate = (e) => {
    const formattedExpireDate = string.formatExpireDate(e.target.value);
    setExpireDate(formattedExpireDate);
  }

  const onChangeCVV = (e) => {
    const formattedCVV = string.formatCVV(e.target.value);
    setCVV(formattedCVV);
  }

  const onChangeTransactionValue = (e) => {
    let formattedTransactionValue = e.target.value.replace(/[^\d]/g, "");
    console.log(formattedTransactionValue);
    if (formattedTransactionValue) {
      formattedTransactionValue = number.formatCurrency(Number(formattedTransactionValue)/100);
    }
    setTransactionValue(formattedTransactionValue);
  }

  useEffect(() => {
    if (isDataValid(name, CPF, cardNumber, expireDate, CVV, transactionValue)) {

    }
  }, [name, CPF, cardNumber, expireDate, CVV, transactionValue])

  return (
    <Style.Container>
      <InputField type="text" required label="Nome da pessoa compradora" value={name} onChange={onChangeName}/>
      <InputField type="text" required label="CPF" value={CPF} onChange={onChangeCPF}/>
      <InputField type="text" required label="Nº do cartão" value={cardNumber} onChange={onChangeCardNumber}/>
      <Style.Line>
        <InputField type="text" required label="Data de expiração" value={expireDate} onChange={onChangeExpireDate}/>
        <InputField type="text" required spaceBefore label="CVV" value={CVV} onChange={onChangeCVV}/>
      </Style.Line>
      <InputField type="text" required label="Valor da transação" value={transactionValue} onChange={onChangeTransactionValue}/>
    </Style.Container>
  );
}

export default CreateForm;

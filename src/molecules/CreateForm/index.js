import React, { useEffect, useState } from 'react';

import CreateButton from '../../atoms/CreateButton';
import InputField from '../../atoms/InputField';

import string from '../../helpers/string';
import number from '../../helpers/number';
import { isDataValid } from '../../helpers/validators';

import Style from './CreateForm.style';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [CVV, setCVV] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [payloadRequest, setPayloadRequest] = useState({});

  /**
   * controls enabling the create transaction button
   */
  const enableSubmission = (status) => {
    setDisabledButton(!status);
  };

  /**
   * performs the creation of a transaction
   */
  const handleSubmission = () => {
    console.log(payloadRequest);
  };

  /**
   * The following functions control and format form values
   */

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
    if (formattedTransactionValue) {
      formattedTransactionValue = number.formatCurrencyInput(Number(formattedTransactionValue)/100);
    }
    setTransactionValue(formattedTransactionValue);
  }

  /**
   * Checks whether the data is valid and enables the creation of the transaction 
   */
  useEffect(() => {
    const filteredTransactionValue = transactionValue.replace(/[^\d]/g, "");
    const filteredCPF = string.filterCPF(CPF);
    const filteredCardNumber = string.filterCardNumber(cardNumber);
    const filteredExpireDate = string.filterExpireDate(expireDate);

    if (isDataValid(name, filteredCPF, filteredCardNumber, filteredExpireDate, CVV, filteredTransactionValue)) {
      enableSubmission(true);
      const payload = {
        buyer_document: filteredCPF,
        credit_card_holder_name: name,
        credit_card_number: filteredCardNumber,
        credit_card_expiration_date: filteredExpireDate,
        credit_card_cvv: CVV,
        amount: Number(filteredTransactionValue),
      };
      setPayloadRequest(payload);
    } else {
      enableSubmission(false);
    }
  }, [name, CPF, cardNumber, expireDate, CVV, transactionValue])

  return (
    <>
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
      <CreateButton action={handleSubmission} disabled={disabledButton} />
    </>
  );
}

export default CreateForm;

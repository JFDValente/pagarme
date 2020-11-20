import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTransaction, updateTransaction } from '../../store/actions';

import CreateButton from '../../atoms/CreateButton';
import InputField from '../../atoms/InputField';

import { formatRequest } from '../../helpers/formatter';
import { createTransaction } from '../../helpers/request';
import string from '../../helpers/string';
import number from '../../helpers/number';
import { isDataValid } from '../../helpers/validators';
import generators from '../../helpers/generators';

import Style from './CreateForm.style';

const CreateForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  // const transactions = useSelector(state => state);

  /**
   * controls enabling the create transaction button
   */
  const enableSubmission = (status) => {
    setDisabledButton(!status);
  };

  const sendRequest = (transaction) => {
    const payload = formatRequest(transaction);
    createTransaction(payload)
      .then(data => {
        dispatch(updateTransaction(transaction.syncId, data.id, data.status));
      })
      .catch((error) => {
      });
  }

  /**
   * performs the creation of a transaction
   */
  const handleSubmission = () => {
    const filteredTransactionValue = transactionValue.replace(/[^\d]/g, "");
    const filteredcpf = string.filterCpf(cpf);
    const filteredCardNumber = string.filterCardNumber(cardNumber);
    const filteredExpireDate = string.filterExpireDate(expireDate);

    const newTransaction = {
      syncId: generators.id(),
      name,
      cpf: filteredcpf,
      cardNumber: filteredCardNumber,
      expireDate: filteredExpireDate,
      date: new Date(),
      cvv,
      value: (Number(filteredTransactionValue)/100),
    }
    dispatch(setTransaction(newTransaction));
    sendRequest(newTransaction);
  };

  /**
   * The following functions control and format form values
   */

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeCpf = (e) => {
    const formattedcpf = string.formatCpf(e.target.value);
    setCpf(formattedcpf);
  }

  const onChangeCardNumber = (e) => {
    const formattedCardNumber = string.formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
  }

  const onChangeExpireDate = (e) => {
    const formattedExpireDate = string.formatExpireDate(e.target.value);
    setExpireDate(formattedExpireDate);
  }

  const onChangeCvv = (e) => {
    const formattedCvv = string.formatCvv(e.target.value);
    setCvv(formattedCvv);
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
    const filteredcpf = string.filterCpf(cpf);
    const filteredCardNumber = string.filterCardNumber(cardNumber);
    const filteredExpireDate = string.filterExpireDate(expireDate);

    if (isDataValid(name, filteredcpf, filteredCardNumber, filteredExpireDate, cvv, filteredTransactionValue)) {
      enableSubmission(true);
    } else {
      enableSubmission(false);
    }
  }, [name, cpf, cardNumber, expireDate, cvv, transactionValue])

  return (
    <>
      <Style.Container>
        <InputField type="text" required label="Nome da pessoa compradora" value={name} onChange={onChangeName}/>
        <InputField type="text" required label="CPF" value={cpf} onChange={onChangeCpf}/>
        <InputField type="text" required label="Nº do cartão" value={cardNumber} onChange={onChangeCardNumber}/>
        <Style.Line>
          <InputField type="text" required label="Data de expiração" value={expireDate} onChange={onChangeExpireDate}/>
          <InputField type="text" required spaceBefore label="CVV" value={cvv} onChange={onChangeCvv}/>
        </Style.Line>
        <InputField type="text" required label="Valor da transação" value={transactionValue} onChange={onChangeTransactionValue}/>
      </Style.Container>
      <CreateButton action={handleSubmission} disabled={disabledButton} />
    </>
  );
}

export default CreateForm;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setListTransactions } from '../../store/actions';

import CreateButton from '../../atoms/CreateButton';

import { getTransactions } from '../../helpers/request';
import number from '../../helpers/number';
import string from '../../helpers/string';

import Style from './List.style';

import info from './data';

const List = () => {
  const history = useHistory();
  const goToCreate = () => history.push('/create');
  const dispatch = useDispatch();

  const [countTransactions, setCountTransactions] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [brokenRequest, setBrokenRequest] = useState(false);

  const transactions = useSelector(state => state);

  /**
   * updates summary values
   */
  useEffect(()=> {
    setCountTransactions(transactions.length);

    const sum = transactions.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);
    setTotalValue(sum);
  }, [transactions]);

  /**
   * initial transaction list request
   */
  useEffect(() => {
    if (!transactions.length) {
      getTransactions()
        .then(data => {
          dispatch(setListTransactions(data));
        })
        .catch(()=>{
          setBrokenRequest(true);
        });
    }
  }, []);

  return (
    <>
      <Style.Summary>
        <Style.SummaryLabel>
          {info.quantityTransactionsLabel}
        </Style.SummaryLabel>
        <Style.SummaryValue>
          {number.formatNumber(countTransactions)}
        </Style.SummaryValue>
        <Style.SummaryLabel>
          {info.totalValueTransactionsLabel}
        </Style.SummaryLabel>
        <Style.SummaryValue>
          {number.formatCurrency(totalValue)}
        </Style.SummaryValue>
      </Style.Summary>
      {
        !!transactions && !brokenRequest && transactions.map((transaction) => (
          <Style.Transaction key={Math.random() * 10}>
            <Style.LeftColumnTransaction>
              <Style.User>
                {transaction.name}
              </Style.User>
              <Style.Date>
                {string.formatDate(new Date(transaction.date))}
              </Style.Date>
            </Style.LeftColumnTransaction>
            <Style.RightColumnTransaction>
              <Style.Status>
                {transaction.status}
              </Style.Status>
              <Style.Value>
                {number.formatCurrency(transaction.value)}
              </Style.Value>
            </Style.RightColumnTransaction>
          </Style.Transaction>
        ))
      }
      {
        !!brokenRequest && (
          <Style.Disclaimer>
            {info.disclaimer}
          </Style.Disclaimer>
        )
      }
      <CreateButton glyph="add" action={goToCreate}/>
    </>
  );
}

export default List;

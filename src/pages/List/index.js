import React from 'react';

import number from '../../helpers/number';

import Style from './List.style';

import info from './data';

const List = () => (
  <>
    <Style.Summary>
      <Style.SummaryLabel>
        {info.quantityTransactionsLabel}
      </Style.SummaryLabel>
      <Style.SummaryValue>
        {number.formatNumber(103030)}
      </Style.SummaryValue>
      <Style.SummaryLabel>
        {info.totalValueTransactionsLabel}
      </Style.SummaryLabel>
      <Style.SummaryValue>
        {number.formatCurrency(24339,46)}
      </Style.SummaryValue>
    </Style.Summary>
    {
      info.transactions.map((transaction) => (
        <Style.Transaction>
          <Style.LeftColumnTransaction>
            <Style.User>
              {transaction.user}
            </Style.User>
            <Style.Date>
              {transaction.date}
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
    <Style.ButtonContainer>
      <Style.CreateButton>
        {info.createButtonLabel}
      </Style.CreateButton>
    </Style.ButtonContainer>
  </>
);

export default List;

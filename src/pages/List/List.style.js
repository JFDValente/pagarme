import styled from 'styled-components';

const Summary = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 16px 0px;
  background-color: #F2F2F3;
`;

const SummaryLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #070817;
  margin-bottom: 4px;
`;

const SummaryValue = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #65A300;
  padding-bottom: 24px;
  line-height: 32px;
`;

const ContainerTransactions = styled.div`
  margin-bottom: 70px;
`;

const Transaction = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 2px solid #F2F2F3;
`;

const LeftColumnTransaction = styled.div`
`;

const RightColumnTransaction = styled.div`
`;

const User = styled.p`
  font-weight: bold;
  color: #454550;
  margin-bottom: 8px;
`;

const Date = styled.p`
  color: #454550;
`;

const Status = styled.p`
  text-align: right;
  font-size: 14px;
  color: #72737A;
  margin-bottom: 8px;
`;

const Value = styled.p`
  text-align: right;
  font-weight: bold;
  color: #2B2B2B;
`;

const Disclaimer = styled.span`
  display: block;
  font-size: 24px;
  text-align: center;

  margin-top: 50px;
`;

export default {
  Summary,
  SummaryLabel,
  SummaryValue,
  ContainerTransactions,
  Transaction,
  LeftColumnTransaction,
  RightColumnTransaction,
  User,
  Date,
  Status,
  Value,
  Disclaimer,
};

import styled from 'styled-components';

const Summary = styled.div`
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

const Transaction = styled.div`
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

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 32px;
  padding: 0 16px;
`;

const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background-color: #3F2787;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(112, 82, 200, 0.3);
  padding: 12px 0;
`;

const ButtonLabel = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: #FFFFFF;
`;

export default {
  Summary,
  SummaryLabel,
  SummaryValue,
  Transaction,
  LeftColumnTransaction,
  RightColumnTransaction,
  User,
  Date,
  Status,
  Value,
  ButtonContainer,
  CreateButton,
  ButtonLabel,
};

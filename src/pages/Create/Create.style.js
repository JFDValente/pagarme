import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 20px 16px;
  background-color: #F2F2F3;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.span`
  margin-left: 90px;
`;

export default {
  Header,
  BackButton,
  Title,
};

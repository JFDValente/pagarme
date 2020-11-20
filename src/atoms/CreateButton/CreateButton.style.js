import styled from 'styled-components';

const ButtonContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  bottom: 32px;
  padding: 0 16px;
`;

const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ disabled }) => disabled ? '#F2F2F3' : '#3F2787'};
  border: none;
  border-radius: 8px;
  ${({ disabled }) => !disabled ? 'box-shadow: 0px 4px 6px rgba(112, 82, 200, 0.3);' : ''}
  
  padding: 12px 0;
`;

const ButtonLabel = styled.span`
  ${({ hasIcon }) => hasIcon ? `margin-left: 10px;` : ''};
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: ${({ disabled }) => disabled ? '#72737A' : '#FFFFFF'};
`;

export default {
  ButtonContainer,
  CreateButton,
  ButtonLabel,
};

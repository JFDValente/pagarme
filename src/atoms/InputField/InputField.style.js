import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  ${({ spaceBefore }) => !!spaceBefore ? 'margin-left: 8px;' : ''};
`;

const labelUp = css`
  transform: translateY(-22px);
  margin-left: 10px;
  padding: 0 4px;
  background: #FFFFFF;
  z-index: 2;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #8B8B92;
  background-color: transparent;
  outline: none;
  padding: 12px;
  font-size: 16px;
  color: #595A63;

  :focus ~ label {
    transform: translateY(-22px);
    margin-left: 10px;
    padding: 0 4px;
    background: #FFFFFF;
    z-index: 2;
  }
  z-index: 1;

  :focus {
    border-color: #595A63;
  }

  ${({ value }) => !!value ? 'border-color: #595A63;' : ''};
`; 

const Label = styled.label`
  position: absolute;
  font-size: 16px;
  text-align: right;
  flex-basis: 10%;
  padding: 12px;
  color: #8B8B92;

  border-radius: 20px;
  transition: .4s;

  background: transparent;

  ${({ value }) => !!value ? labelUp : ''};
`;

export default {
  Container,
  Input,
  Label,
};

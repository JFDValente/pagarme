import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', 'sans-serif';
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    margin: 0;
    
  }

  p {
    margin: 0;
  }
`;

export default {
  GlobalStyles,
}
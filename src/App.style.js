import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    position: relative;
    font-family: 'Lato', 'sans-serif';
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    margin: 0;
    min-height: 100vh;
    padding-bottom: 22px;
  }

  p {
    margin: 0;
  }
`;

export default {
  GlobalStyles,
}
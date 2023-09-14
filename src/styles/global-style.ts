import { Montserrat } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const montserrat = Montserrat({
    weight: ['400', '500', '700'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    font-family: ${montserrat.style.fontFamily}, sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
    background: #05112F;
    color: #ffffff;
  }

  body.ReactModal__Body--open {
    overflow: hidden;
  }

  @supports (-webkit-touch-callout: none) {
    html {
      height: -webkit-fill-available;
    }
  }

  button {
    appearance: none;
    -webkit-appearance: none;
    background: unset;
    color: inherit;
    cursor: pointer;
    font-family: ${montserrat.style.fontFamily}, sans-serif;
  }

  a {
    color: inherit;
  }

  input,
  textarea {
    font-family: ${montserrat.style.fontFamily}, sans-serif;
  }

  #__next,
  main {
    height: 100%;
  }
`;

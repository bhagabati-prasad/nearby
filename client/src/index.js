import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* 
    font-family: 'Oswald', sans-serif;
    font-family: 'Playfair Display', serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif; 
    */
    ::selection {
        color: #fff;
        background: #8c0;
    }
    ::-webkit-scrollbar {
        width: 0.64rem;
    }
    ::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 0.8rem;
    }
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }
    body {
        min-height: 100vh;
        width:100vw;
        background: #ECEEF5;
        overflow-x: hidden;
        font-family: sans-serif;
        position: relative;
    }
    ul, h1, h2, p {margin-bottom: 0;}
    h2 {font-size: calc(1.96rem - 0.2vw);}
    select option {font-size: 1.5rem}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
/* 
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    
    body {
        /* background-color: #e7e7e7; */
        background-color: #f3ffff;
    }

    button {
        /* border: none; */
    }

`;

export default GlobalStyles;

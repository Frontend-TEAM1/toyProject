import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
/*
styled - reset
*/

const GlobalStyles = createGlobalStyle`
${reset}
* {
	box-sizing: border-box;
	list-style: none;
}
`;

export default GlobalStyles;
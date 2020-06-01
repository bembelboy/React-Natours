import { createGlobalStyle } from 'styled-components';
import * as nameProperty from '../GlobalStyles/Theme/nameProperties';
import { theme } from '../GlobalStyles/Theme/theme';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    &:after &:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
    }
}

html{
    font-size: 62.5%;
}

body{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1,7;
    color: rgb(${theme[nameProperty.mouseGrey]});
    padding: 3rem;
    box-sizing: border-box;
}
`;



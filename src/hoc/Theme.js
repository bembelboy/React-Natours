import  { ThemeProvider } from 'styled-components';
import React from 'react';

import { theme } from '../GlobalStyles/Theme/theme';


const Theme = ({children}) => {
    return ( 
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
     );
}
 
export default Theme;
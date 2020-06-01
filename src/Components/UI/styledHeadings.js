import styled from 'styled-components';
import * as nameProperty from '../../GlobalStyles/Theme/nameProperties';


export const SecondaryHeading = styled.h2`
display: inline-block;
font-size: 2.5rem;
text-transform: uppercase;
font-weight: 700;
background-image: linear-gradient(to right ,rgb(${props => props.theme[nameProperty.lightGreen]}), rgb(${props => props.theme[nameProperty.darkGreen]}));
-webkit-background-clip: text;
background-clip: text;
color: transparent;
letter-spacing: 0.2rem;
`

export const TertiaryHeading = styled.h3`
font-size: ${props => props.theme[nameProperty.defaultFontSize]};
font-weight: 700;
text-transform: uppercase;
margin-bottom: ${props => props.marginBottom || null};
`

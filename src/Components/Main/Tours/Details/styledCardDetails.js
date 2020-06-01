import styled from 'styled-components';
import * as nameProperty from '../../../../GlobalStyles/Theme/nameProperties';

export const CardDetailList = styled.ul`
list-style: none;
width: 80%;
margin: 0 auto;
`

export const CardDetailListElement = styled.li`
text-align:center;
font-size: 1.5rem;
padding: 1rem;


&:not(:last-child){
border-bottom: 1px solid rgb(${props => props.theme[nameProperty.mouseGrey]});
}

&:first-child{
    padding-top: 3rem;
}
`
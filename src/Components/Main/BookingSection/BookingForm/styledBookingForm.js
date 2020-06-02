import styled from "styled-components";

import * as nameProperty from '../../../../GlobalStyles/Theme/nameProperties.js';

export const BookingFormBox = styled.div `
  width: 50%;
  padding: 6rem;
`;

export const BookingForm = styled.form `

`;

export const FormGroup = styled.div `
  margin-bottom: 2rem;
`;

export const FormLabel = styled.label `
font-size: 1.2rem;
font-weight: 700;
margin-left: 2rem;
margin-top: .7rem;
display: block;
transition: all 0.2s ease-in;
transform: translateY(0);
`;

export const FormInput = styled.input `
font-size: 1.5rem;
color: inherit;
padding: 1.5rem 2rem;
border-radius: 3px;
background-color: rgba(${props => props.theme[nameProperty.white]}, .5);
border: none;
border-bottom: 3px solid transparent;
width: 90%;
display: block;
transition: all .3s;


&:focus {
  outline: none;
  box-shadow: 0 1rem 2rem rgba(${props => props.theme[nameProperty.black]}, .1);
  border-bottom: 3px solid rgb(${props => props.theme[nameProperty.mediumGreen]});
}

&:focus:invalid {
  border-bottom: 3px solid rgb(${props => props.theme[nameProperty.orange]});
}

&::placeholder {
  color: rgba(${props => props.theme[nameProperty.mouseGrey]}, .5);
}

&:placeholder-shown + ${FormLabel} {
opacity: 0;
visibility: hidden;
transform: translateY(-3.5rem);
}
`;

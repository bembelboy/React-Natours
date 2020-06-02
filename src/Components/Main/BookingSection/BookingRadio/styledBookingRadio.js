import styled from 'styled-components';

import * as nameProperty from './../../../../GlobalStyles/Theme/nameProperties.js';

export const RadioFormBox = styled.div `
  width: 50%;
  display: inline-block;
`;

export const RadioLabel = styled.label`
  font-size: ${props => props.theme[nameProperty.defaultFontSize]};
  cursor: pointer;
  position: relative;
  padding-left: 5rem;
`;

export const FormRadioButton = styled.span`
  height: 3rem;
  width: 3rem;
  border: 5px solid rgb(${props => props.theme[nameProperty.mediumGreen]});
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -.5rem;

&::after {
  content: "";
  display: block;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(${props => props.theme[nameProperty.mediumGreen]});
  opacity: 0;
  transition: opacity .2s;
}
`;

export const RadioInput = styled.input`
  display: none;
&:checked ~ ${RadioLabel} ${FormRadioButton}:: after {
opacity: 1;
}
`;

import styled from 'styled-components';
import * as nameProperty from './../../GlobalStyles/Theme/nameProperties.js';


export const NavContainer = styled.div `

`;


export const NavBackround = styled.div `
height: 6rem;
width: 6rem;
border-radius: 50%;
background-color: black;
position: fixed;
top: 6.5rem;
right: 6.5rem;
background-image: radial-gradient(
  rgb(${props => props.theme[nameProperty.lightGreen]}),
  rgb(${props => props.theme[nameProperty.darkGreen]}));
z-index: 1000;
transition: all .5s cubic-bezier(0.86 , 0, 0.07, 1);
`;

export const Navigation = styled.nav `
height: 100vh;
position: fixed;
top: 0;
right: 0;
z-index: 1500;

opacity: 0;
width: 0;
transition: all .5s cubic-bezier(0.68 , -0.55, 0.265, 1.55);
`;

export const NavList = styled.ul `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`;

export const NavCheckbox = styled.input `
display: none;
`;



export const NavButton = styled.input `
  visibility: hidden;
  display: none;
&:checked ~ ${NavBackround} {
  transform: scale(130);
  transition: all .8s cubic-bezier(0.68 , -0.55, 0.265, 1.55);
}

&:checked ~ ${Navigation} {
  opacity: 1;
  width: 100%;
  transition: opacity .5s ease-in;
}
`;

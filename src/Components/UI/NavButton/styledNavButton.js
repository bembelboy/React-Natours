import styled from 'styled-components';
import * as nameProperty from './../../../GlobalStyles/Theme/nameProperties.js';



export const NavIcon = styled.span `
position: relative;
margin-top: 3.5rem;
  &,
  &::before, &::after{
    width: 3rem;
    height: 2px;
    background-color: rgb(${props => props.theme[nameProperty.darkGrey]});

    display: inline-block;
  }

  :&{
    background-color:${props => props.clicked ? 'transparent' : '#333'};
  }

  &::before, &::after{
    content: "";
    position: absolute;
    left: 0;
  }

  &::before{
    top: -.8rem;
  }

  &::after{
    top: .8rem;
  }

`;


export const NavButtonLabel = styled.label `
cursor: pointer;
text-align: center;
background-color: rgb(${props => props.theme[nameProperty.white]});
height: 7rem;
width: 7rem;
border-radius: 50% ;
position: fixed;
top: 6rem;
right: 6rem;
border: none;
z-index: 2000;
box-shadow: 0 1rem 3rem rgba(${props => props.theme[nameProperty.black]}, .1);


&:hover {
  ${NavIcon}::before {
    top: -1rem;
    transition: all .2s;
  }

  ${NavIcon}::after {
    top: 1rem;
    transition: all .2s;
  }
}


`;

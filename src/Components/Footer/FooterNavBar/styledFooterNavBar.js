import styled from 'styled-components';
import * as nameProperty from './../../../GlobalStyles/Theme/nameProperties.js';

export const NavList = styled.ul `
list-style: none;
border-top: 1px solid rgb(${props => props.theme[nameProperty.mouseGrey]});
padding-top: 2rem;
`;

export const NavItem = styled.li `
  display: inline-block;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover, &:active {
    color: rgb(${props => props.theme[nameProperty.lightGreen]});
    box-shadow: 0 1rem 2rem rgba(${props => props.theme[nameProperty.black]}, .4);
    transform:  rotate(5deg) scale(1.3);
    transition: all .2s;
  }
`;

export const NavAnchor = styled.a `

  color: rgb(${props => props.theme[nameProperty.mouseGrey]});
  &:link, &:visited {
    color: rgb(${props => props.theme[nameProperty.lightGrey1]});
    text-decoration: none;
    text-transform:  uppercase;
    display: inline-block;
  }

  &:hover, &:active {
    color: rgb(${props => props.theme[nameProperty.lightGreen]});
  }
`;

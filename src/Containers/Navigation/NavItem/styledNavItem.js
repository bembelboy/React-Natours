import styled from 'styled-components';
import * as  nameProperty from './../../../GlobalStyles/Theme/nameProperties.js';
import { Link } from 'react-router-dom';


export const NavLink = styled(Link) `
text-decoration: none;
color: rgb(${props => props.theme[nameProperty.white]});

&:hover, &:active {
background-position: 100%;
color: rgb(${props => props.theme[nameProperty.lightGreen]});
transform: translateX(-1rem);
}
`;

export const NavItem = styled.li `
cursor: pointer;
margin: 3rem;

display: block;
padding: 1rem 2rem;
font-size: 3rem;
font-weight: 300;
color: rgb(${props => props.theme[nameProperty.white]});
text-decoration: none;
text-transform: uppercase;
background-image: linear-gradient(120deg, transparent 0%, transparent 50%,
  rgb(${props => props.theme[nameProperty.white]}) 50%);
background-size: 225%;
transition: all .4s;


&:hover, &:active {
background-position: 100%;
color: rgb(${props => props.theme[nameProperty.lightGreen]});
transform: translateX(-1rem);
}

`;

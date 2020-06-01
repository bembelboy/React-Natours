import styled from 'styled-components';

import backgroundHeader from '../../img/hero.jpg';
import { moveInLeft, moveInRight } from './keyframesHeader';
import * as propertyName from '../../GlobalStyles/Theme/nameProperties'



export const NatoursHeader = styled.header`
 height: 95vh; /** Sets the height to 95%of the viewPort */
  background-image: linear-gradient(to right bottom,
   rgba(${props => props.theme[propertyName.lightGreen]}, 0.8), rgba(${props => props.theme[propertyName.darkGreen]}, 0.8))
  ,url(${backgroundHeader}); 
 background-size: cover;
 background-position: top;
 position: relative;

 clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
 -webkit-clip-path:  polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

export const LogoBox = styled.div`
position: absolute;
top: 4rem;
left: 4rem;
`
export const Logo = styled.img`
height: 4.5rem;
`

export const PrimaryHeading = styled.h1`
color: rgb(${props => props.theme[propertyName.white]});
text-transform: uppercase;
backface-visibility: hidden;
margin-bottom: 6rem;
`


export const HeaderSpan = styled.span`
display: block;
font-size: ${props => props.fontSize || '6rem'};
font-weight: ${props => props.fontWeight || '400'};
letter-spacing: ${props => props.letterSpacing || '3.5rem'};

animation: ${props => props.moveInLeft ? moveInLeft : moveInRight} 1s ease-out;
`

export const TextBox = styled.div`
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`



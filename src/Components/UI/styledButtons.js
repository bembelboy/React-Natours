import styled from 'styled-components';

import { moveInBottom } from '../Header/keyframesHeader';
import * as nameProperty from '../../GlobalStyles/Theme/nameProperties';


export const Button = styled.a`
text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 4rem;
display: inline-block;
border-radius: 10rem;
transition: all .2s;
font-weight: 700;
position: relative;
font-size: 1.6rem;
cursor: pointer;

:hover{
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
}

&:hover::after{
    transform: scaleX(1.4);
    transform: scaleY(1.6);
    opacity: 0;
}

:active{
    transform: translateY(0.1rem);
    box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
}
&:after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
}
`

export const WhiteButton = styled(Button)`
background-color: rgb(${props => props.theme[nameProperty.white]});
color: rgb(${props => props.theme[nameProperty.mouseGrey]});

&:after{
    background-color: rgb(${props => props.theme[nameProperty.white]});
}
`

export const WhiteHeaderButton = styled(WhiteButton)`
animation: ${moveInBottom} .5s ease-out .75s;
backface-visibility: hidden;
animation-fill-mode: backwards;
`

export const ArrowButton = styled.a`
font-size: ${props => props.theme[nameProperty.defaultFontSize]};
color: rgb(${props => props.theme[nameProperty.darkGreen]});
display: inline-block;
text-decoration: none;
border-bottom: 1px solid rgb(${props => props.theme[nameProperty.darkGreen]});
padding: 0.5rem;
transition: all .2s;
border-radius: 0.5rem;

&:link{
}

&:visited{
    color: rgb(${props => props.theme[nameProperty.lightGreen]});
    border-bottom: 1px solid rgb(${props => props.theme[nameProperty.lightGreen]});
}

&:active{
    box-shadow: 0 .5rem 1rem rgba(${props => props.theme[nameProperty.black]}, 0.2);
  transform: translateY(0.2rem);
}

&:hover{
    background-color: rgb(${props => props.theme[nameProperty.lightGreen]});
    color: rgb(${props => props.theme[nameProperty.white]});
    box-shadow: 0 1rem 2rem rgba(${props => props.theme[nameProperty.black]}, 0.2);
    transform: translateY(-2px);
}
`

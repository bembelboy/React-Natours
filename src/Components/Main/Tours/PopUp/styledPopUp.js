import styled from 'styled-components';

import * as nameProperty from './../../../../GlobalStyles/Theme/nameProperties.js';
import { SecondaryHeading, TertiaryHeading } from './../../../UI/styledHeadings.js';
import { WhiteButton } from './../../../UI/styledButtons.js';;

export const PopUpContainter = styled.div`
position: fixed;
top: 0;
left: 0;
background-color: rgba(${props => props.theme[nameProperty.black]}, .8);
height: 100vh;
width: 100%;
z-index: 4000;
display: none;
`;

export const PopUpBox = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
background-color: rgb(${props => props.theme[nameProperty.white]});
width: 75%;
opacity: 1;
box-shadow: 0 2rem 4rem rgb(${props => props.theme[nameProperty.black]});
border-radius: 3px;
display: table;
`;

export const LeftPopUpContainer = styled.div`
display: table-cell;
width: 33.33%;
height: auto;
overflow: hidden;
`;

export const RightPopUpContainer = styled.div`
width: 66.66%;
height: auto;
display: table-cell;
vertical-align: middle;
padding: 3rem 5rem;
position: absolute;
overflow: auto;
`;

export const PopUpImg = styled.img`
display: block;
width: 100%;
`;

export const PopUpHeading = styled(SecondaryHeading)`
margin: 2rem auto;
`;

export const SecondPopUpHeading = styled(TertiaryHeading)`
margin: 2rem auto;
`;

export const PopUpText = styled.p`
font-size: 1.4rem;
margin-bottom: 4rem;
column-count: 2;
column-gap: 5rem;
column-rule: .5px solid rgb(${props => props.theme[nameProperty.lightGrey1]});
hyphens: auto;
`;

export const PopUpButton = styled(WhiteButton)`
background-color: rgb(${props => props.theme[nameProperty.mediumGreen]});
color: rgb(${props => props.theme[nameProperty.white]});

&:after{
    background-color: rgb(${props => props.theme[nameProperty.mediumGreen]});
}
`;

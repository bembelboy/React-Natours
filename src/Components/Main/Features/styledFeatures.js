import styled from 'styled-components';
import * as nameProperty from '../../../GlobalStyles/Theme/nameProperties';

import backgroundHeader from '../../../img/nat-4.jpg';
import { Globe, Compass, Map, Heart } from 'styled-icons/feather';


export const featureContainer = styled.section`
padding: 20rem 0;
margin-top: -15rem;
background-image: linear-gradient(to right bottom,
   rgba(${props => props.theme[nameProperty.lightGreen]}, 0.8), rgba(${props => props.theme[nameProperty.darkGreen]}, 0.8))
  ,url(${backgroundHeader}); 
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  transform: skewY(-12deg);

   & > *{
    transform: skewY(12deg);
  }
`

export const featureBox = styled.div`
width: 20%;
background-color: rgba(${props => props.theme[nameProperty.white]}, .8);
font-size: 1.5rem;
padding: 2.5rem;
text-align: center;
border-radius: 3px;
box-shadow: 0 1.5rem 4rem rgba(${props => props.theme[nameProperty.black]}, .8);
transition: transform .3s;

:hover {
  transform: translateY( -1.5rem) scale(1.1);
}
`
 export const Wrapper = styled.div`
 display: flex;
 justify-content: space-around;
 `

export const GlobeIcon = styled(Globe)`
height: 6rem;
width: auto;
margin: .5rem;
color: rgb(${props => props.theme[nameProperty.lightGreen]});
margin-bottom: 1.5rem;
`
export const CompassIcon = styled(Compass)`
height: 6rem;
width: auto;
margin: .5rem;
color: rgb(${props => props.theme[nameProperty.mediumGreen]});
margin-bottom: 1.5rem;
`

export const MapIcon = styled(Map)`
height: 6rem;
width: auto;
margin: .5rem;
color: rgb(${props => props.theme[nameProperty.mediumGreen]});
margin-bottom: 1.5rem;
`

export const HeartIcon = styled(Heart)`
height: 6rem;
width: auto;
margin: .5rem;
color: rgb(${props => props.theme[nameProperty.darkGreen]});
margin-bottom: 1.5rem;
`

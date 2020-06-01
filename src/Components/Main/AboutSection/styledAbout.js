import styled from 'styled-components';

import * as nameProperty from '../../../GlobalStyles/Theme/nameProperties';
import { SecondaryHeading } from '../../UI/styledHeadings';

export const AboutSection = styled.section`
background-color: rgb(${props => props.theme.lightGrey1});
padding: 25rem 0 65rem 0;
margin-top: -20vh;
`

export const AboutHeading = styled(SecondaryHeading)`
transition: all .2s;

&:hover {
    transform: skewY(2deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem rgba(0, 0, 0, .2)
}
`

export const HeadingBox = styled.div`
text-align: center;
margin: 8rem;
`

export const ContentContainer = styled.div`
display: flex;
width: inherit;
justify-content: space-around;
margin: 0 6rem;
`

export const TextBox = styled.div`
width: 50%;
`

export const ImageBox = styled.div`
text-align: center;
width: 50%;
display: block;
position: relative;

 :hover *:not(:hover) {
   transform: scale(.9);
   transition: all .2s;
}
`

export const AboutText = styled.p`
font-size: ${props => props.theme[nameProperty.defaultFontSize]};
line-height: 2.5rem;
&:not(:last-child){
    margin-bottom: 3rem;
}
`

export const AboutImage = styled.img`
width: 55%;
box-shadow: 0 1.5rem 4rem rgba(${props => props.theme[nameProperty.black]});
border-radius: 2px;
position: absolute;
z-index: 10;
transition: all .2s;
outline-offset: 2rem;

&.Img1{
    left: 5%;
    top: -2rem;
}

&.Img2{
    right: 0;
    top: 2rem;
}

&.Img3{
    left: 20%;
    top: 10rem;
}


&:hover {
outline: 1.5rem solid rgb(${props => props.theme[nameProperty.darkGreen]});
transform: scale(1.2) translateY(-0.5rem);
box-shadow: 0 2.5rem 4rem rgba(${props => props.theme[nameProperty.black]}, .3);
z-index: 11;
}

`
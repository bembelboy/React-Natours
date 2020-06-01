import styled, { css } from 'styled-components';
import * as nameProperty from '../../GlobalStyles/Theme/nameProperties';


export const CardWrapper = styled.div`
position: relative;
width: 100%;
height: 45rem;
cursor: pointer;
transition: all 8s ease-in-out;
margin: auto 2rem;


&.flipped {
    & > div:first-of-type{
        transform: perspective(150rem) rotateY(-180deg);
    }

    & > div:last-of-type {
        transform: perspective(150rem) rotateY(0deg);
    }
}
`

export const CardSide = css`
position: absolute;
top: 0;
left: 0;
overflow: hidden;
display: flex;
flex-direction: column;
width: 100%;
min-width:  25rem;
height: 100%;
backface-visibility: hidden;
transition: all .8s ease-in-out;
border-radius: 3px;
box-shadow: 0 1.5rem 4rem rgba(${props => props.theme[nameProperty.black]}, .15);
`

export const RotatingCardFront = styled.div`
${CardSide};
text-align: center;

background-color: rgb(${props => props.theme[nameProperty.white]});
font-size: 3rem;
`

export const RotatingCardBack = styled.div`
${CardSide}
transform: rotateY(-180deg);
color: white;

&.primary{
    background-image: linear-gradient(to bottom ,rgb(${props => props.theme[nameProperty.yellow]}), rgb(${props => props.theme[nameProperty.orange]}));
}

&.secondary{
    background-image: linear-gradient(to bottom ,rgb(${props => props.theme[nameProperty.lightBlue]}), rgb(${props => props.theme[nameProperty.purple]}));
}

&.tertiary{
    background-image: linear-gradient(to bottom ,rgb(${props => props.theme[nameProperty.lightGreen]}), rgb(${props => props.theme[nameProperty.darkGreen]}));
}
 `
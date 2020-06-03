import styled from 'styled-components';

import * as nameProperty from './../../GlobalStyles/Theme/nameProperties.js'


export const Footer = styled.footer `
  background-color: rgb(${props => props.theme[nameProperty.darkGrey]});
  padding: 10rem 0;
  font-size: 1.4rem;
`;

export const FooterLogoBox = styled.div `
text-align: center;
margin-bottom: 8rem;
`;

export const FooterLogo = styled.img `
width: 15rem;
height: auto;
`;

export const FooterContainer = styled.div `
display: flex;
justify-content: space-around;
`;

export const FooterBox = styled.div `
width: 30%;
height:  auto;
`;

export const FooterCopyRight = styled.p `
  .owner {
    color: rgb(${props => props.theme[nameProperty.lightGrey1]});
  }
`;

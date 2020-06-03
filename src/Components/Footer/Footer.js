import React from 'react';
import * as styled from './styledFooter.js';

import NavBar from './FooterNavBar/FooterNavBar.js';
import Logo from './../../img/favicon.png';

const Footer = (props) => {
  return (
    <styled.Footer>
      <styled.FooterLogoBox>
        <styled.FooterLogo src={Logo} alt='Full Logo' />
      </styled.FooterLogoBox>
      <styled.FooterContainer>
        <styled.FooterBox>
          <NavBar />
        </styled.FooterBox>
        <styled.FooterBox>
          <styled.FooterCopyRight className={'owner'}>Built in an online course by JONAS SCHMIEDTMANN for advanced CSS and SASS.<span className={'owner'}>
            Free for personal and comercial use. Design by JONAS SCHMIEDTMANN.
          </span>
          </styled.FooterCopyRight>
        </styled.FooterBox>
      </styled.FooterContainer>
    </styled.Footer>
  );
}


export default Footer;

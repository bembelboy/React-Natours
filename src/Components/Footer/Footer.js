import React from 'react';
 import * as styled from './styledFooter.js';

 import NavBar from './FooterNavBar/FooterNavBar.js';

const  Footer = (props) => {
  return (
    <styled.Footer>
      <styled.FooterLogoBox>
        <styled.FooterLogo alt='Full Logo' />
      </styled.FooterLogoBox>
      <styled.FooterContainer>
        <styled.FooterBox>
          <NavBar />
        </styled.FooterBox>
        <styled.FooterBox>

        </styled.FooterBox>
      </styled.FooterContainer>
    </styled.Footer>
  );
}


export default Footer;

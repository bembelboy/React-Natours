import React from 'react';

import { NatoursHeader, Logo, LogoBox, PrimaryHeading, HeaderSpan, TextBox } from './styledHeader';
import logoImg from '../../img/logo-white.png';
import { WhiteHeaderButton } from '../UI/styledButtons';

const header = (props) => {
    return (
        <NatoursHeader>
            <LogoBox>
                <Logo src={logoImg} alt='Natours-Logo' />
            </LogoBox>
            <TextBox>
                <PrimaryHeading>
                    <HeaderSpan moveInLeft>Outdoors</HeaderSpan>
                    <HeaderSpan fontSize={'2rem'} letterSpacing={'1.75rem'} fontWeight={'70rem'}>is where Life happens</HeaderSpan>
                </PrimaryHeading>
                <WhiteHeaderButton>Discover our Tours</WhiteHeaderButton>
            </TextBox>
        </NatoursHeader>

    );
}

export default header;
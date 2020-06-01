import React from 'react';

import { AboutSection, AboutHeading, ContentContainer, TextBox, ImageBox, AboutText, HeadingBox, AboutImage } from './styledAbout';
import { TertiaryHeading } from '../../UI/styledHeadings';
import { ArrowButton } from '../../UI/styledButtons';

import Nature1 from '../../../img/nat-1-large.jpg';
import Nature2 from '../../../img/nat-2-large.jpg';
import Nature3 from '../../../img/nat-3-large.jpg';

const About = () => {
    return ( 
        <AboutSection>
        <HeadingBox>
            <AboutHeading>Exciting tours for adventourus people</AboutHeading>
        </HeadingBox>
        <ContentContainer>
            <TextBox>
                <TertiaryHeading marginBottom={'1.5rem'} >You're going to fall in love with nature</TertiaryHeading>
                <AboutText >
                    Lorem Ipsum sdswsvw wevevwe wevvevwev evwvveev wevvwevwev weveevvwe wevwevveevw wevevevwev wevwevwwevv wevwevwevevw wevwevwevwev wevwevwev
                </AboutText>
                <TertiaryHeading marginBottom={'1.5rem'}>Life adventours like never before</TertiaryHeading>
                <AboutText>
                    Lorem Ipsum sdswsvw wevevwe wevvevwev evwvveev wevvwevwev weveevvwe wevwevveevw wevevevwev wevwevwwevv wevwevwevevw wevwevwevwev wevwevwev
                </AboutText>
                <ArrowButton href='#'>Learn more &rarr;</ArrowButton>
            </TextBox>
            <ImageBox>
                    <AboutImage className={'Img1'} src={Nature1} alt={'Nature1'} />
                    <AboutImage className={'Img2'} src={Nature2} alt={'Nature2'} />
                    <AboutImage className={'Img3'} src={Nature3} alt={'Nature3'} />
            </ImageBox>
        </ContentContainer>
    </AboutSection>
     );
}
 
export default About;
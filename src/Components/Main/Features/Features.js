import React, { useState } from 'react';

import * as styled from './styledFeatures';
import { TertiaryHeading } from '../../UI/styledHeadings';

const Features = () => {

    const [featureBox] = useState([
        { icon: 'Globe', heading: 'Explore the World', paragraph: 'Cool Paragraph', },
        { icon: 'Compass', heading: 'Meet Nature', paragraph: 'Text to come to your birthdayparty without a hat', },
        { icon: 'Map', heading: 'Find Your Way', paragraph: 'Text to come to your birthdayparty without a hat', },
        { icon: 'Heart', heading: 'Live a heathier life', paragraph: 'Text to come to your birthdayparty without a hat', },
    ]);

    const featureBoxArray = featureBox.map(box => {
        let icon;
        switch (box.icon) {
            case 'Globe':
                icon = <styled.GlobeIcon />
                break;
            case 'Compass':
                icon = <styled.CompassIcon />
                break;
            case 'Map':
                icon = <styled.MapIcon />
                break;
            case 'Heart':
                icon = <styled.HeartIcon />
                break;
            default:
                icon = null;
                break;
        }
        return (
            <styled.featureBox>
                {icon}
                <TertiaryHeading marginBottom={'1.5rem'}>{box.heading}</TertiaryHeading>
                <p>{box.paragraph}</p>
            </styled.featureBox>
        )
    })

    return (
            <styled.featureContainer>
                <styled.Wrapper>
                {featureBoxArray}
                </styled.Wrapper>
            </styled.featureContainer>
    );
}

export default Features;
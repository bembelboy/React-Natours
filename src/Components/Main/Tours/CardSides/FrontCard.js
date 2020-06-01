import React from 'react';

import { RotatingCardFront } from '../../../UI/styledCard';
import CardDetails from '../Details/cardDetails';
import * as styled from '../styledTours';

const FrontCard = (props) => {
    return (
        <RotatingCardFront >
            <styled.CardPicture className={props.cardPicture} />
            <styled.CardHeading>
                <styled.CardHeadingSpan className={props.colorGradient}>
                    {props.heading}
                </styled.CardHeadingSpan>
            </styled.CardHeading>
            <CardDetails cardDetails={props.cardDetails} />
        </RotatingCardFront>
    );
}

export default FrontCard;
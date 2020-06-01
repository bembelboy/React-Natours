import React from 'react';

import { RotatingCardBack } from '../../../UI/styledCard';
import * as styled from '../styledTours';


const BackCard = (props) => {
    return (
        <RotatingCardBack className={props.colorGradient}>
            <styled.CardPriceBox>
                <styled.CardPrice className={'priceOnly'}>Only</styled.CardPrice>
                <styled.CardPrice className={'priceValue'}>{props.price}$</styled.CardPrice>
            </styled.CardPriceBox>
            <styled.CardButton>Book Now!</styled.CardButton>
        </RotatingCardBack>
    );
}

export default BackCard;
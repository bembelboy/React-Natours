import React from 'react';
import * as styled from './styledCardDetails';

const cardDetails = (props) => {
    const DetailArray = props.cardDetails.map(detail => {
        return <styled.CardDetailListElement>{detail}</styled.CardDetailListElement>
    })
    return (
        <styled.CardDetailList>
            {DetailArray}
        </styled.CardDetailList>
    );
}

export default cardDetails;
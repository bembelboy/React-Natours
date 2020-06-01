import React, { useState } from 'react';
import * as styled from './styledTours';

import { CardWrapper } from '../../UI/styledCard';
import FrontCard from './CardSides/FrontCard';
import BackCard from './CardSides/BackCard';


const Tours = () => {
    const [tourBox] = useState([
        {
            heading: 'The sea explorer',
            details: ['3 day tours', 'Up to 40 people', '2 tour guides',
            'Sleep in cozy hotels', 'Diffifculty: easy'],
            gradient: 'secondary',
            price: '298',
        },
        {
            heading: 'The snow adventurer',
            details: ['5 day tours', 'Up to 15 people', '3 tour guides',
                'Sleep in provident tents', 'Diffifculty: hard'],
            gradient: 'primary',
            price: '399',
        },
        {
            heading: 'The forest hiker',
            details: ['7 day tours', 'Up to 40 people', '6 tour guides',
                'Sleep in provided tents', 'Diffifculty: medium'],
            gradient: 'tertiary',
            price: '599',
        },
    ])

    const flipCard = event => {
        event.currentTarget.classList.toggle('flipped');
    }

    let tourBoxInfoArray = tourBox.map(box => {
        let colorGradient;
        let cardPicture;
        switch (box.gradient) {
            case 'secondary':
                colorGradient = 'secondary';
                cardPicture = 'sea';
                break;
            case 'primary':
                colorGradient = 'primary';
                cardPicture = 'mountains';
                break;
            case 'tertiary':
                colorGradient = 'tertiary';
                cardPicture = 'forest';
                break;
            default:
                colorGradient = null;
                cardPicture = null;
                break;
        }
        return (
            <CardWrapper onMouseOver={(event) => flipCard(event)}>
                <FrontCard 
                cardPicture={cardPicture} 
                 colorGradient={colorGradient} 
                 heading={box.heading}
                 cardDetails={[...box.details]}
                 />
                 <BackCard
                 colorGradient={colorGradient}
                 price={box.price}
                 />
            </CardWrapper>
        )
    })


    return (
        <styled.ToursContainer>
            <styled.ToursHeading>Most Popular Tours</styled.ToursHeading>
            <styled.ToursBox>
                {tourBoxInfoArray}
            </styled.ToursBox>
            <styled.GreenButton>See all Tours</styled.GreenButton>
        </styled.ToursContainer>
    );
}

export default Tours;
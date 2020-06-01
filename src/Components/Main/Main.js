import React from 'react';

import About from './AboutSection/AboutSection';
import Features from './Features/Features';
import Tours from './Tours/ToursSection';
import Stories from './StoriesSection/Stories';
import Booking from './BookingSection/Booking.js';


const Main = () => {
    return (
        <main>
            <About />
            <Features />
            <Tours />
            <Stories />
            <Booking />
        </main>
    );
}

export default Main;
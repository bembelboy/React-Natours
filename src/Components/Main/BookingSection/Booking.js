import React from "react";

import * as styled from "./styledBooking.js";

import BookingForm from "./BookingForm/BookingForm.js";

const Booking = props => {
  return (
    <styled.BookingContainer>
      <styled.BookingBox>
        <styled.BookingHeadingBox>
          <styled.BookingHeading>Start booking now!</styled.BookingHeading>
        </styled.BookingHeadingBox>
        <BookingForm />
      </styled.BookingBox>
    </styled.BookingContainer>
  );
};

export default Booking;

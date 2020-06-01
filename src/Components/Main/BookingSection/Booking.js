import React from "react";

import * as styled from "./styledBooking.js";

const Booking = props => {
  return (
    <styled.BookingContainer>
      <styled.BookingContentBox></styled.BookingContentBox>
      <styled.BookingBox></styled.BookingBox>
    </styled.BookingContainer>
  );
};

export default Booking;

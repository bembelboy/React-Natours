import React from "react";

import * as styled from "./styledBookingForm.js";

const BookingForm = props => {
  return (
    <styled.BookingFormBox>
      <styled.BookingForm>
        <styled.FormGroup>
          <styled.FormInput type='text' placeholder='Full Name' required />
          <styled.FormLabel>Full Name</styled.FormLabel>
        </styled.FormGroup>
        <styled.FormGroup>
          <styled.FormInput type='text' placeholder='E-Mail' required />
          <styled.FormLabel>E-Mail</styled.FormLabel>
        </styled.FormGroup>
      </styled.BookingForm>
    </styled.BookingFormBox>
  );
};

export default BookingForm;

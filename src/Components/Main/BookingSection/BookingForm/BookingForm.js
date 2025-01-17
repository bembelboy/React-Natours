import React from "react";

import * as styled from "./styledBookingForm.js";
import BookingRadio from './../BookingRadio/BookingRadio.js';

const BookingForm = props => {
  return (
    <React.Fragment>
      <styled.BookingFormBox>
        <styled.BookingForm>
          <styled.FormGroup>
            <styled.FormInput type='text' placeholder='Full Name' required />
            <styled.FormLabel>Full Name</styled.FormLabel>
          </styled.FormGroup>
          <styled.FormGroup>
            <styled.FormInput type='email' placeholder='E-Mail' required />
            <styled.FormLabel>E-Mail</styled.FormLabel>
          </styled.FormGroup>
          <BookingRadio />
        </styled.BookingForm>
      </styled.BookingFormBox>
      <styled.FormButtonBox>
        <styled.SubmitButton>
          Next step &rarr;
        </styled.SubmitButton>
      </styled.FormButtonBox>
    </React.Fragment>
  );
};

export default BookingForm;

import React from 'react';

import * as styled from './styledBookingRadio.js';

const BookingRadio = (props) => {
  return (
    <React.Fragment>
      <styled.RadioFormBox>
        <styled.RadioInput  type='radio' name='GroupSize'/>
        <styled.RadioLabel>Small Tour Group</styled.RadioLabel>
      </styled.RadioFormBox>
      <styled.RadioFormBox>
        <styled.RadioInput type='radio' name='GroupSize' />
        <styled.RadioLabel>Large Tour Group</styled.RadioLabel>
      </styled.RadioFormBox>
    </React.Fragment>
  );
}



export default BookingRadio; //imported in BookingForm

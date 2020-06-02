import React from 'react';

import * as styled from './styledBookingRadio.js';

const BookingRadio = (props) => {
  return (
    <React.Fragment>
    <styled.RadioFormBox>
      <styled.RadioInput  type='radio' name='GroupSize'  id='small'/>
      <styled.RadioLabel htmlFor='small' className='small'>
        <styled.FormRadioButton></styled.FormRadioButton>
        Small Tour Group
      </styled.RadioLabel>
    </styled.RadioFormBox>
    <styled.RadioFormBox>
      <styled.RadioInput type='radio' name='GroupSize' className='large' id='large' />
        <styled.RadioLabel htmlFor='large' className='large'>
          <styled.FormRadioButton></styled.FormRadioButton>
          Large Tour Group
        </styled.RadioLabel>
      </styled.RadioFormBox>
    </React.Fragment>
  );
}



export default BookingRadio; //imported in BookingForm

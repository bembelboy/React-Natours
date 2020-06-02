import React, {
  useState
} from 'react';

import * as styled from './styledBookingRadio.js';

const BookingRadio = (props) => {
  const [Selected, setSelected] = useState(false);
  console.log(Selected)

  const onSelectedChange = (event) => {
    console.log(event.target.className)
    setSelected(event.target.className)
  }

  return (
    <React.Fragment>
      <styled.RadioFormBox>
        <styled.RadioInput  type='radio' name='GroupSize' className='small' id='small'

        />
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

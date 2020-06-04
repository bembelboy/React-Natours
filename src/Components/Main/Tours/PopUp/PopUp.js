import React from 'react';
import * as styled from './styledPopUp.js';

import PopUpImg1 from './../../../../img/nat-9.jpg';
import PopUpImg2 from './../../../../img/nat-8.jpg';

const PopUp = (props) => {
  return (
    <styled.PopUpContainter>
      <styled.PopUpBox>
        <styled.LeftPopUpContainer>
          <styled.PopUpImg src={PopUpImg1} />
          <styled.PopUpImg src={PopUpImg2} />
        </styled.LeftPopUpContainer>

        <styled.RightPopUpContainer>
          <styled.PopUpHeading>Start booking now</styled.PopUpHeading>
          <styled.SecondPopUpHeading>And let your dreams come true</styled.SecondPopUpHeading>
          <styled.PopUpText>
            This is the text that should you bring to the decision which tour to book. I mean these are really great tours... Just read the Stories.  You will only meet these kind of nice people on our tours. Now that I made that Point clear; I still need more text so the design can shine more beautiful in the light of the glimmering sunlight. The sunlight is broken by the scale of a wild fish beforehand. Of course it is why wouldn't it be. This is nearly enough text so one last sentence. The barber shop openend at the deepest volcano while a school-child is riding on a giant lizard.
          </styled.PopUpText>
          <styled.PopUpButton>
            Book Now!
          </styled.PopUpButton>
        </styled.RightPopUpContainer>
      </styled.PopUpBox>
    </styled.PopUpContainter>
  );
}

export default PopUp;

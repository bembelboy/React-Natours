import React, { useState, } from 'react';

import * as styled from './styledNavButton';

const NavButton = (props) => {
  const [toggleButton, setToggleButton] = useState(false)

  const toggleHandler = () => setToggleButton(!toggleButton)


  return (
    <React.Fragment>
      <styled.NavRadioCheckbox type='checkbox' id={'nav-toggle'}  />
      <styled.NavButtonLabel htmlFor={'nav-toggle'} onClick={() => toggleHandler()} clicked={toggleButton}>
        <styled.NavIcon clicked={toggleButton}>&nbsp;</styled.NavIcon>
      </styled.NavButtonLabel>
    </React.Fragment>
  );
}


export default NavButton;

import React, { useState, } from 'react';

import * as styled from './styledNavButton';

const NavButton = (props) => {
  const [toggleButton, setToggleButton] = useState(false)

  const toggleHandler = () => setToggleButton(!toggleButton)


  return (
    <styled.NavButtonLabel htmlFor='nav-toggle' onClick={() => toggleHandler()} clicked={toggleButton}>
      <styled.NavIcon clicked={toggleButton}>&nbsp;</styled.NavIcon>
    </styled.NavButtonLabel>
  );
}


export default NavButton;

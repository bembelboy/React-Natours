import React from 'react';

import * as styled from './styledNavigation.js';


const NavItem = (props) => {
  return (
    <styled.NavItem>
      <styled.NavLink>{props.name}</styled.NavLink>
    </styled.NavItem>
  );
}


export default NavItem;

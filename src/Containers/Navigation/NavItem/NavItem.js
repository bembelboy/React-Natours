import React from 'react';

import * as styled from './styledNavItem.js';
import Header from './../../../Components/Header/Header.js'


const NavItem = (props) => {
  return (
    <styled.NavItem>
      <styled.NavLink to ={Header}>{props.name}</styled.NavLink>
    </styled.NavItem>
  );
}


export default NavItem;

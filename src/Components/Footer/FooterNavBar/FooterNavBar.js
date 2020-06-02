import React, { useState } from 'react';
import * as styled  from './styledFooterNavBar.js';

const NavBar = (props) => {
  const [NavItems] = useState([
    'Company', 'Jobs', 'FAQ',
  ])
  const NavItemArray = NavItems.map( item => {
    return (
      <styled.NavItem>
        <styled.NavAnchor>{item}</styled.NavAnchor>
      </styled.NavItem>
    )
  })
  return (
    <styled.NavList>
      {NavItemArray}
    </styled.NavList>
  );
}


export default NavBar;

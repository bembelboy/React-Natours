import React, {
  useState
} from 'react';
import * as styled from './styledNavigation.js';

import NavItem from './NavItem.js';


const Navigation = (props) => {
  const [NameTag] = useState([
    'About Natours', 'Your Benefits', 'Popular Tours', 'Stories', 'Book Now'
  ]);

  const NavArray = NameTag.map(name => {
    return <NavItem name={name}/>;
  })
  return (
    <styled.NavContainer>
      <styled.NavButton type='checkbox' id='nav-toggle'/>
      <styled.NavButtonLabel htmlFor='nav-toggle'>Menu
      </styled.NavButtonLabel>
      <styled.NavBackround/>
      <styled.Navigation>
        <styled.NavList>
          {NavArray}
        </styled.NavList>
      </styled.Navigation>
    </styled.NavContainer>
  );
}


export default Navigation;

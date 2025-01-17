import React, {
  useState
} from 'react';
import * as styled from './styledNavigation.js';

import NavButton from './../../Components/UI/NavButton/Navbutton.js';
import NavItem from './NavItem/NavItem.js';


const Navigation = (props) => {
  const [NameTag] = useState([
    'About Natours', 'Your Benefits', 'Popular Tours', 'Stories', 'Book Now'
  ]);

const [Linktag] = useState([
  '/about' , '/features', '/tours' , '/stories' , '/booking'
]);

  const NavArray = NameTag.map(name => {
    return <NavItem  link={Linktag[NameTag.indexOf(name)]} name={name}/>;
  });
  return (
    <styled.NavContainer>
      <NavButton/>
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

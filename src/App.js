import React from 'react';
import {
  Route
} from 'react-router-dom';
import {
  StaticRouter
} from 'react-router';

import Header from './Components/Header/Header';
import Theme from './hoc/Theme';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer.js';
import Navigation from './Containers/Navigation/Navigation.js';


function App(props) {
  return (
    <StaticRouter basename='/'>
      <Theme>
        <Route path='/' component={Navigation} />
        <Route path='/' component={Header} />
        <Route path='/' component={Main} />
        <Route path='/' component={Footer} />
        </Theme>
    </StaticRouter>
  );
}

export default App;

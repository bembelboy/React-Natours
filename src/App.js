import React from 'react';

import Header from './Components/Header/Header';
import Theme from './hoc/Theme';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer.js';
import Navigation from './Containers/Navigation/Navigation.js';


function App(props) {
  return (
    <Theme>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </Theme>
  );
}

export default App;

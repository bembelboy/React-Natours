import React from 'react';

import Header from './Components/Header/Header';
import Theme from './hoc/Theme';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer.js';


function App(props) {
  return (
    <Theme>
      <Header />
      <Main />
      <Footer />
    </Theme>
  );
}

export default App;

import React from 'react';

import Header from './Components/Header/Header';
import Theme from './hoc/Theme';
import Main from './Components/Main/Main';


function App(props) {
  return (
    <Theme>
      <Header />
      <Main />
    </Theme>
  );
}

export default App;

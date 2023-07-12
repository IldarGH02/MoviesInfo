import React from 'react';

import AppContent from 'components/AppContent';
import { BrowserRouter } from 'react-router-dom';

import '../../scss/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;

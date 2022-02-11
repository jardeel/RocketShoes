import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = (): JSX.Element =>  {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
      <GlobalStyle />
      <h1>Hello World</h1>
    </BrowserRouter>
    
  );
}

export default App;

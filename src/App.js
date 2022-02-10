import GlobalStyle from './styles/global';
import { Router } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header/>
      <Routes />
      <GlobalStyle />
      <h1>Hello World</h1>
    </Router>
    
  );
}

export default App;

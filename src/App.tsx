import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import usePersistedState from './utils/usePersistedState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import GlobalStyled from './styles/global';

//Pages
import Login from './pages/login';
import Home from './pages/home';
import FolderDetails from './pages/folder-details';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Header toogleTheme={toogleTheme} />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/folder/:id' component={FolderDetails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

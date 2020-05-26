import React, { Component } from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/Theme';
import NotLoggedInBody from '../components/Body/NotLoggedBody';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    const isUserLogged = false;

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header isUserLogged={isUserLogged} margin={theme.spacing}></Header>
          <Switch>
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
            <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;

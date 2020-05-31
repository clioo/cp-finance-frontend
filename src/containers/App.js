import React, { Component } from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/ui/Theme';
import NotLoggedInBody from '../components/Body/NotLoggedBody';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from '../components/ui/Footer';

class App extends Component {
  render() {
    const isUserLogged = false;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;

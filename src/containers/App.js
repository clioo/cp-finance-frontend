import React from "react";
import Header from "./Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/Theme";
import NotLoggedInBody from "../components/Body/NotLoggedBody";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "../components/ui/Footer";
import SignUp from "../components/User/SignUp";
import SignIn from "../components/User/SignIn";
import LoggedBody from "../components/Body/LoggedBody";
import NewExpense from '../components/Expenses/NewExpense';

const app = (props) => {
  const isUserLogged = true;
  const [redirectState, setRedirectState] = React.useState({
    redirect: false,
  });

  const redirect = (to) => {
    // history.push(to);
    setRedirectState({redirect: to})
  };
  const renderBody = () => {
    let body;
    if (isUserLogged) {
      body = <LoggedBody redirectMethod={redirect} />;
    } else {
      body = <NotLoggedInBody redirectMethod={redirect}/>;
    }
    return body;
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {redirectState.redirect ? <Redirect to={redirectState.redirect}/> : null}
        <Header
          redirectMethod={redirect}
          isUserLogged={isUserLogged}
          margin={theme.spacing}
        ></Header>
        <Switch>
          <Route exact path="/" render={renderBody} />
          <Route
            exact
            path="/signUp"
            component={isUserLogged ? null : SignUp}
          />
          <Route
            exact
            path="/signIn"
            component={isUserLogged ? null : SignIn}
          />
          <Route
            exact
            path="/signOut"
            component={isUserLogged ? null : NotLoggedInBody}
          />
          <Route
            exact
            path="/newExpense"
            component={isUserLogged ? NewExpense : NotLoggedInBody}
          />
          {/* <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} /> */}
          {/* <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default app;

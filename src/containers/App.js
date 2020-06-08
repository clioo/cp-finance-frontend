import React, { Component } from "react";
import Header from "./Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/Theme";
import NotLoggedInBody from "../components/Body/NotLoggedBody";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/ui/Footer";
import SignUp from "../components/User/SignUp";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../components/User/SignIn";
import LoggedBody from "../components/Body/LoggedBody";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const app = (props) => {
  const classes = useStyles();
  const isUserLogged = true;
  const history = useHistory();
  const redirect = (to) => {
    history.push(to);
  };

  const renderBody = () => {
    let body;
    if (isUserLogged) {
      body = <LoggedBody redirectMethod={redirect} />;
    } else {
      body = <NotLoggedInBody redirectMethod={redirect}/>;
    }
    return body
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
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
          {/* <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} /> */}
          {/* <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} /> */}
          {/* <Route exact path="/" component={isUserLogged ? null : NotLoggedInBody} /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default app;

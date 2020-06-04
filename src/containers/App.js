import React, { Component } from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/Theme";
import NotLoggedInBody from "../components/Body/NotLoggedBody";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/ui/Footer";
import SignUp from "../components/User/SignUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const app = (props) => {
  const classes = useStyles();
  const isUserLogged = false;
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header isUserLogged={isUserLogged} margin={theme.spacing}></Header>
          <Switch>
            <Route
              exact
              path="/"
              component={isUserLogged ? null : NotLoggedInBody}
            />
            <Route
              exact
              path="/signUp"
              component={isUserLogged ? null : SignUp}
            />
            <Route
              exact
              path="/signIn"
              component={isUserLogged ? null : NotLoggedInBody}
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

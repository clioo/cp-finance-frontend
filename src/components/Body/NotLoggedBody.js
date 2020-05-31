import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "../ui/Buttton";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const notLoggedBody = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Common finances for common people.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Create annual, monthly budget, or just resgister the money you waste
          in beers.
        </Typography>
        <Typography variant="body1">Never been so simple.</Typography>
        <Grid container justify="center">
          <Link to="/signUp">
            <Button
              icon={AccountCircleIcon}
              text={"Sign up"}
              size={'large'}
              className={classes.loginButton}
            />
          </Link>
        </Grid>
      </Container>
    </div>
  );
};

export default notLoggedBody;

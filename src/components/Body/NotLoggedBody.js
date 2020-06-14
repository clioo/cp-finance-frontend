import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "../ui/Buttton";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import BaseBody from "./BaseBody";

const notLoggedBody = (props) => {

  return (
    <BaseBody>
      <Typography variant="h2" component="h1" gutterBottom>
        Common finances for common people.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Create annual, monthly budget, or just resgister the money you waste in
        beers.
      </Typography>
      <Typography variant="body1">Never been so simple.</Typography>
      <Grid container justify="center">
        <Button
          component={Link}
          to="/signUp"
          renderAs={Link}
          icon={AccountCircleIcon}
          text={"Sign up"}
          size={"large"}
        />
        <Grid container justify="center">
          <h3>Do you have an account?</h3>
        </Grid>
        <Grid container justify="center">
          <Button
            component={Link}
            to="/signIn"
            color="secondary"
            renderAs={Link}
            text={"Sign in"}
            size={"small"}
          />
        </Grid>
      </Grid>
    </BaseBody>
  );
};

export default notLoggedBody;

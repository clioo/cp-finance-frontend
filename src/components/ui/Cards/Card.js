import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "../Buttton";
import MaterialButton from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const card = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
          <br />
          <strong>{props.total}$</strong>

        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          text={props.buttonText}
          color="secondary"
          renderAs={MaterialButton}
          onClick={props.buttonClick}
          to={props.to}
        />
      </CardActions>
    </Card>
  );
};

export default card;

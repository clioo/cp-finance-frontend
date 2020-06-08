import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const button = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        component={props.component} //for react router
        to={props.to} // for react router
        variant="contained"
        color={props.color ? props.color : 'primary'}
        size={props.size ? props.size : 'medium'}
        className={classes.button}
        onClick={props.click}
        startIcon={props.icon ? React.createElement(props.icon) : null}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default button;

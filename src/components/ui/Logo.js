import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/cp-logo.svg';


const appLogo = (props) =>{
  const useStyles = makeStyles({
    logo: {
      height: props.height
    }
  });
  const classes = useStyles();
  return (
    <img className={classes.logo} alt="Company logo" src={logo} />

  )
}

export default appLogo;

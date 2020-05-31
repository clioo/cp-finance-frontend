import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));


const footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <Container maxWidth="sm">
      <Typography variant="body1">CP finances.</Typography>
      <Typography variant="body2" color="textSecondary">
        {'Copyleft © '}
        <Link color="inherit" href="https://github.com/clioo/cp-finance-frontend">
          Github code
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
    </footer>
  )
}

export default footer;

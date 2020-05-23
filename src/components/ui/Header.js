import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList';

//Create a css file
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ElevationScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const buttonAppBar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <ElevationScroll>
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              margin={20}
              anchor="left"
              open={state.left}
              onClose={toggleDrawer(false)}
            >
              <DrawerList toggleDrawer={toggleDrawer}/>
            </Drawer>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Sign Up</Button>
          </Toolbar>
        </ElevationScroll>
      </AppBar>
    </div>
  );
}

export default buttonAppBar

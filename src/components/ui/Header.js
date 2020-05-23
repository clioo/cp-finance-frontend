import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import DrawerList from './DrawerList';
import Logo from './Logo';
import ElevationScroll from './ElevationScroll';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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


const buttonAppBar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    anchorEl: null,
    mobileMoreAnchorEl: null
  });

  const isMenuOpen = Boolean(state.anchorEl);
  const isMobileMenuOpen = Boolean(state.mobileMoreAnchorEl);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  const signUpButton = () => (
    <Button color="inherit">Sign Up</Button>
  );

  const handleProfileMenuOpen = (event) => {
    if (props.isUserLogged)
    {
      setState({...state, anchorEl: event.currentTarget});
    }
    else {
      //TO:DO handle sign up here
      console.log('handle sign up to be continued');
    }

  };

  const handleMenuClose = () => {
    setState({...state, anchorEl: null});
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={state.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
              <DrawerList
                isUserLogged={props.isUserLogged}
                toggleDrawer={toggleDrawer}
              />
            </Drawer>

            <Typography variant="h6" className={classes.title}>
              <Logo height="3em" />
            </Typography>
            <div>
              <IconButton
                aria-label="show more"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </ElevationScroll>
      </AppBar>
      {props.isUserLogged ? renderMenu : null}
    </div>
  );
}

export default buttonAppBar

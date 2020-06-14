import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DrawerList from "../components/ui/DrawerList";
import Logo from "../components/ui/Logo";
import ElevationScroll from "../components/ui/ElevationScroll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { useHistory, withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Create a css file
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "5em",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const header = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
    selectedIndex: -1,
  });

  let selectedIndex = state.selectedIndex;

  const isMenuOpen = Boolean(state.anchorEl);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, left: open, selectedIndex: selectedIndex });
  };

  const handleListItemClick = (item, index) => {
    selectedIndex = index;
    props.redirectMethod(item.to);
  };

  const handleProfileMenuOpen = (event) => {
    if (props.isUserLogged) {
      setState({ ...state, anchorEl: event.currentTarget });
    } else {
      // Need to avoid to spam the stach
      if (history.location.pathname === "/signUp") return;
      props.redirectMethod("/signUp");
    }
  };

  const handleMenuClose = () => {
    setState({ ...state, anchorEl: null });
  };

  const menuId = "primary-search-account-menu";
  const profileRenderMenu = (
    <Menu
      anchorEl={state.anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
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
              <BrowserRouter>
                <DrawerList
                  isUserLogged={props.isUserLogged}
                  toggleDrawer={toggleDrawer}
                  handleListItemClick={handleListItemClick.bind(
                    state.selectedIndex
                  )}
                  selectedItemIndex={state.selectedIndex}
                  currentLocation={history.location.pathname}
                />
              </BrowserRouter>
            </Drawer>

            <Typography variant="h6" className={classes.title}>
              <Link to="/">
                <Logo height="3em" />
              </Link>
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
      {props.isUserLogged ? profileRenderMenu : null}
    </div>
  );
};

export default header;

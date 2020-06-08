import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";
//Icons
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";

const drawerList = (props) => {
  const loggedItems = [
    {
      text: "New Expense",
      icon: AddCircleOutlineIcon,
    },
    {
      text: "New Income",
      icon: AddCircleOutlineIcon,
    },
    {
      text: "Expenses List",
      icon: ListIcon,
    },
    {
      text: "Incomes List",
      icon: ListIcon,
    },
    {
      text: "Month budget",
      icon: EditIcon,
    },
    {
      text: "Annual budget",
      icon: EditIcon,
    },
  ];

  const notLoggedInItems = [
    {
      text: "Sign Up",
      linkTo: "/signUp",
      icon: PersonAddIcon,
    },
    {
      text: "Sign In",
      linkTo: "/signIn",
      icon: VpnKeyIcon,
    },
  ];

  const items = (props.isUserLogged ? loggedItems : notLoggedInItems).map(
    (item, index) => (
      <ListItem
        button
        key={"drawerItem-" + index.toString()}
        index={index}
        // props.selectedItemIndex === index ||
        selected={item.linkTo === props.currentLocation}
        onClick={props.handleListItemClick.bind(this, item, index)}
      >
        <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  );

  return (
    <div
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        <Link to="/">
          <Logo height="7em" />
        </Link>
        <Divider />
        {items}
      </List>
    </div>
  );
};

export default drawerList;

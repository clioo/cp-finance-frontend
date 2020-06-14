import React from "react";
import BaseBody from "../Body/BaseBody";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const newExpense = (props) => {
  const classes = useStyles();
  return (
    <BaseBody>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Expense" variant="outlined" />
        <TextField id="outlined-basic" label="Quantity" variant="outlined" />
        <TextField id="outlined-basic" label="Type" variant="outlined" />
      </form>
    </BaseBody>
  );
};

export default newExpense;

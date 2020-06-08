import React from "react";
import BaseBody from "./BaseBody";
import Grid from "@material-ui/core/Grid";
import Card from "../ui/Cards/Card";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textCenter: { textAlign: "center" },
});

const loggedInBody = (props) => {
  const userInfoCards = [
    {
      title: "Expenses",
      total: 0, // GET FROM DATABASE
      to: "/expenses/month/1", // replace for a current month
      buttonText: "Details",
      content: "Your expenses this month",
    },
    {
      title: "Incomes",
      total: 0, // GET FROM DATABASE
      to: "/incomes/month/1", // replace for a current month
      buttonText: "Details",
      content: "Your incomes this month",
    },
  ];

  const classes = useStyles();
  return (
    <BaseBody>
      <h1 className={classes.textCenter}>Your expenses / incomes report</h1>
      <Grid container spacing={2}>
        {userInfoCards.map((card, index) => (
          <Grid key={index} item xs={6}>
            <Card
              buttonText={card.buttonText}
              to={card.to}
              title={card.title}
              content={card.content}
              total={card.total}
            />
          </Grid>
        ))}
      </Grid>
    </BaseBody>
  );
};

export default loggedInBody;

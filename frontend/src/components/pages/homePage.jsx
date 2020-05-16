import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    homepage: {
      padding: "10px",
      paddingTop: "30px",
    },
  };
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <Typography variant="h3" font="Adamina">
        HomePage
      </Typography>
      <Typography variant="h5" font="Adamina">
        You are Logged in.
      </Typography>
    </div>
  );
};

export default HomePage;

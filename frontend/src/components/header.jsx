import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    navBarContents: {
      marginLeft: "16%",
      marginRight: "16%",
      [theme.breakpoints.down("sm")]: {
        margin: "0",
      },
    },
    navBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    brandName: {
      fontFamily: "Alata",
      fontSize: "24px",
      color: "#08356b",
    },
  };
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar className={classes.navBarContents}>
        <Typography className={classes.brandName} variant="h7">
          Globetrotters
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

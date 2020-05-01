import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    navBarContents: {
      marginLeft: "16%",
      marginRight: "16%",
      [theme.breakpoints.down("sm")]: {
        margin: "0",
      },
    },
    root: {
      backgroundColor: "transparent",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    brandName: {
      fontFamily: "Alata",
      fontSize: "24px",
      color: "#08356b",
      flex: "1",
    },
    navbarButton: {
      color: "#08356b",
      textTransform: "none",
    },
  };
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.navBarContents}>
        <Typography className={classes.brandName} variant="h7">
          Globetrotters
        </Typography>
        <Button className={classes.navbarButton}>Login</Button>
        <Button className={classes.navbarButton}>Get Started</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

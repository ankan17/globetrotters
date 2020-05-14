import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLoginButton, GoogleLogoutButton } from "../widgets";

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
      backgroundColor: "#232323",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      marginBottom: "10px",
    },
    brandName: {
      fontFamily: "Alata",
      fontSize: "24px",
      color: "#ffffff",
      flex: "1",
    },
    navbarButton: {
      color: "#ffffff",
      textTransform: "none",
    },
    navbarLink: {
      textDecoration: "none",
    },
  };
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.navBarContents}>
        <Typography className={classes.brandName} variant="h7">
          Globetrotters
        </Typography>

        {props.auth && props.auth.authenticated ? (
          <>
            <Link to="/user" className={classes.navbarLink}>
              <Button className={classes.navbarButton}>Profile</Button>
            </Link>
            <Link to="/" className={classes.navbarLink}>
              <Button className={classes.navbarButton}>Home</Button>
            </Link>
            <GoogleLogoutButton>
              <Button className={classes.navbarButton}>Logout</Button>
            </GoogleLogoutButton>
          </>
        ) : (
          <GoogleLoginButton />
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(Header);

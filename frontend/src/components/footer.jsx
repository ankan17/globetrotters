import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#232323",
    minHeight: "64px",
    textAlign: "center",
    bottom: "0",
  },
  footerText: {
    color: "#ffffff",
    minHeight: "30px",
    paddingTop: "34px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerText}>
        <span>Globetrotters</span>
        <CopyrightIcon />
        <span>2020</span>
      </div>
    </div>
  );
};

export default Footer;

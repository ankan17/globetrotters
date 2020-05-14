import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLoginButton } from "../widgets";

const useStyles = makeStyles((theme) => {
  return {
    landingPage: {
      padding: "10px",
      paddingTop: "30px",
    },
    landingPageParagraph: {
      paddingRight: "40%",
      [theme.breakpoints.down("sm")]: {
        paddingRight: "0",
      },
    },
  };
});

const LandingPage = () => {
  const classes = useStyles();
  const heading = "Read, Travel and Share your Experience";
  const subHeading =
    "Read, We believe that travelling around the world shouldn’t be hard.";
  const paragraph =
    "Whether you choose to spend a few years or just a couple months traveling this beautiful planet, it’s important to see what’s out there for you. GlobeTrotters is a social media site for the wanderers.";

  return (
    <div className={classes.landingPage}>
      <Typography variant="h3" font="Adamina">
        {heading}
      </Typography>
      <Typography paragraph variant="h5">
        {subHeading}
      </Typography>
      <Typography className={classes.landingPageParagraph} paragraph variant="body1">
        {paragraph}
      </Typography>
    </div>
  );
};

export default LandingPage;

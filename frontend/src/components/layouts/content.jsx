import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  content: {
    flex: 1,
    // backgroundImage: 'url("/static/img/bg3.png")',
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
  },
});

const Content = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Grid container className={classes.content}>
      <Grid item xs={0} sm={2} lg={3} />
      <Grid item xs={12} sm={8} lg={6}>
        {children}
      </Grid>
      <Grid item xs={0} sm={2} lg={3} />
    </Grid>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;

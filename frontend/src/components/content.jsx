import React from "react";
import { Grid } from "@material-ui/core";

const Content = () => {
  return (
    <Grid container>
      <Grid item xs={0} sm={2} />
      <Grid item xs={12} sm={8}>
        <span> Inside Content </span>
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
};

export default Content;

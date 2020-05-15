import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  textField: {
    margin: "auto",
    width: "300px",
    display: "block",
  },
}));

const EditProfile = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.textField} type="text" id="name" label="Name" />
      <TextField className={classes.textField} type="text" id="bio" label="Bio" />
    </form>
  );
};

export default EditProfile;

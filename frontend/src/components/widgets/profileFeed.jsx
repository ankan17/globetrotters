import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostCard from "./postCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rowContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  paper: {
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px 0px 0px 0px",
    },
  },
}));

const makeRow = (rowPosts, rowId, classes) => {
  return (
    <Grid container className={classes.rowContainer}>
      {rowPosts.map((post, index) => {
        return (
          <Grid className={classes.paper} item xs>
            <PostCard id={`${rowId}_${index}`}>xs</PostCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

const ProfileFeed = () => {
  const classes = useStyles();
  const posts = [{}, {}, {}, {}, {}, {}, {}, {}];
  const postArrays = [];

  for (let i = 0; i < posts.length; i += 3) {
    postArrays.push(posts.slice(i, i + 3));
  }

  return (
    <div className={classes.root}>
      {postArrays.map((rowPosts, index) => {
        return makeRow(rowPosts, index, classes);
      })}
    </div>
  );
};

export default ProfileFeed;

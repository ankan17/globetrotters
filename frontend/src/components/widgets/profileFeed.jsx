import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostCard from "./postCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const makeRow = (rowPosts, rowId, classes) => {
  return (
    <Grid container>
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
    postArrays.push(posts.slice(i, i + 4));
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

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    content: {
      padding: "30px",
    },
    image: {
      display: "flex",
      alignItems: "center",
    },
    counts: {
      display: "inline-block",
      paddingRight: "30px",
    },
    avatar: {
      width: "150px",
      height: "150px",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
        height: "100px",
      },
    },
    pos: {
      marginBottom: 12,
    },
  };
});

const ProfileCard = (props) => {
  const classes = useStyles();

  const { userInfo } = props;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.image}>
        <Avatar className={classes.avatar} alt="User DP" src={userInfo.image} />
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {userInfo.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {userInfo.bio}
        </Typography>
        <div className={classes.counts}>
          <strong>{userInfo.counts.posts}</strong>
          {" posts"}
        </div>
        <div className={classes.counts}>
          <strong>{userInfo.counts.followers}</strong>
          {" followers"}
        </div>
        <div className={classes.counts}>
          <strong>{userInfo.counts.following}</strong>
          {" following"}
        </div>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  userInfo: PropTypes.node.isRequired,
};

export default ProfileCard;

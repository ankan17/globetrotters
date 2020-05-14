import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

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
      paddingBottom: "10px",
    },
    avatar: {
      width: "150px",
      height: "150px",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
        height: "100px",
      },
    },
    bio: {
      marginBottom: 12,
    },
    button: {
      padding: "5",
      display: "flex",
      textTransform: "none",
    },
  };
});

const ProfileCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { userInfo } = props;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.image}>
        <Avatar className={classes.avatar} alt="User DP" src={userInfo.image} />
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {userInfo.name}
        </Typography>
        <Typography className={classes.bio} color="textSecondary">
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
        <Button className={classes.button} onClick={() => history.push("/settings")}>
          <Edit />
          <span> Edit Profile </span>
        </Button>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  userInfo: PropTypes.node.isRequired,
};

export default ProfileCard;

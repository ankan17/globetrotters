import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
// import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  authorInfo: {
    paddingTop: "0",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = () => {
  const post = {
    title: "The Goa Gest",
    subheader: "",
    author: "Nimagna Hazra",
    body:
      "\"Vintage\"\n\"On a dark desert highway\nCool wind in my hair\nWarm smell of colitas\nRising up through the air\"\n\nDriving back from the beach, we had crossed a retro themed hotel. It might have been dubbed as just another posh hotel in the vast sea of Goa tourism but to me, the sight made the Eagles' masterpiece rush back to mind.\"My head grew heavy and my sight grew dim\nI had to stop for the night.\"Our first day in Goa was a hectic one. After a whole night of traveling and a whole morning of roaming about in sun, we all were pretty beat by the afternoon. So we had decided to return to our hostel for checking in and freshening up. None of us wanted to admit it but we all needed a nap. Just to restore the normalcy before heading out again.\"There she stood in the doorway I heard the mission bell And I was thinking to myself This could be heaven or this could be hell.No we did not stay at the hotel in question. Pretty sure none of us could afford it. But the Mercedes parked out front did make me wonder if she'd be inside. If she'd be as tiffany twisted as the song claimed. If she'd light a candle and show us the way. I think I'd like to find it out some day. Or maybe it's just an ordinary hotel and a normal car. And we just have to look for her in this metaphorical hotel called life. Or maybe we have found her out already. Who knows. Afterall, aren't we all prisoners of our own device?\n||The Goa Gest||\n||Spring of 20||",
    image: "/static/img/postImage.jpg",
    createdAt: "September 14, 2016",
  };

  const userInfo = {
    name: "Nimagna Hazra",
    bio: '"People don\'t take trips, trips take people."',
    counts: {
      followers: "129",
      following: "203",
      posts: "12",
    },
    image: "/static/img/profile_user.jpg",
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4">{post.title}</Typography>
      </CardContent>
      <CardContent className={classes.authorInfo}>
        <Avatar className={classes.avatar} alt="User DP" src={userInfo.image} />
        <Typography style={{ flex: "1", paddingLeft: "15px" }}>
          {post.author}
        </Typography>
        <Typography>{post.createdAt}</Typography>
      </CardContent>
      <CardMedia className={classes.media} image={post.image} title={post.title} />
      <CardContent>
        <Typography component="p">{post.body}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

// Post.propTypes = {
//   userInfo: PropTypes.node.isRequired,
// };

export default Post;

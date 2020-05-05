import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ShareIcon from "@material-ui/icons/Share";
// import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  content: {
    maxHeight: "300px",
    overflow: "hidden",
  },
}));

const PostCard = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
      <CardMedia className={classes.content} image="/static/img/postcard.jpg">
        <Typography component="p">
          Saloma, olá, hello! Welcome to the beautiful country Mozambique! As this
          amazing South African country joins our Socialbnb family, we want to take
          the chance and introduce you to its features. Since Mozambique has a long
          coastline along the Indian Ocean, it is no wonder that this country has
          magnificent, white sandy beaches. Beautiful, crystal clear, and lovingly
          warm water invites you for relaxing days at the beach. What is missing in
          order for it to be just like paradise? Indeed, palm trees that are offering
          their pleasing shade. Be aware of falling coconuts though! The most
          beautiful beaches are supposed to be Bilene, Barra Beach Club, and Tofo.
          Pack your sunscreen and off you go! Talking of coconuts, other food you
          should give a try is Matapa. Matapa is a typical creamy main dish made out
          of peanuts, cassaca tree leaves and coconuts. Usually its side dish is
          Chima, a sort of corn porridge. Something else you should try are some of
          Mozambiques wild fruits with funny names such as: Malamba, Mavungua,
          Mambimi, or Tintsiva, just to name a few. Ask a local person for guidence
          just to be on the safe side. Of course you shouldn’t just randomly eat
          fruits that you don’t know.
        </Typography>
      </CardMedia>
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

export default PostCard;

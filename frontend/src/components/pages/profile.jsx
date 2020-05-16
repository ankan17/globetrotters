import React from "react";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { ProfileCard, ProfileFeed } from "../widgets";

const Profile = (props) => {
  const { user } = props;

  let userInfo = {
    name: "",
    bio: "",
    counts: {
      followers: "129",
      following: "203",
      posts: "12",
    },
    photo: "",
  };

  if (user.loggedIn) {
    userInfo = {
      ...userInfo,
      ...user.user,
    };
  }

  return (
    <div>
      <ProfileCard userInfo={userInfo} />
      <Divider />
      <ProfileFeed />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Profile);

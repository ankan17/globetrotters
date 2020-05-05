import React from "react";
import { ProfileCard, ProfileFeed } from "../widgets";

const Profile = () => {
  const userInfo = {
    name: "Tanmoy Ghosh",
    bio: '"People don\'t take trips, trips take people."',
    counts: {
      followers: "129",
      following: "203",
      posts: "12",
    },
    image: "/static/img/profile_user.jpg",
  };

  return (
    <div>
      <ProfileCard userInfo={userInfo} />
      <br />
      <ProfileFeed />
    </div>
  );
};

export default Profile;

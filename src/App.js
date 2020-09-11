import React, { useState } from "react";
import "./styles.css";

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
    </>
  );
};

export default function App() {
  const username = "Instagram";

  return <Profile username={username} />;
}

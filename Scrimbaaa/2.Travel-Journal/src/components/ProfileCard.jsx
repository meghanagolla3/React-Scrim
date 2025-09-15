import React from "react";

function ProfileCard(props) {
  return (
    <div>
      <img src={props.i.avatar} alt="image" className="img2" />
      <h1>{props.i.name}</h1>
      <p>{props.i.bio}</p>
    </div>
  );
}

export default ProfileCard;

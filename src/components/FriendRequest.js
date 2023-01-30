import React from "react";
import TitleHolder from "./TitleHolder";
import UserPeople from "./UserPeople";

const FriendRequest = () => {
  return (
    <div className="groupholder">
      <TitleHolder title="Friend Request" />
      <UserPeople
        userButton="true"
        // singleButton="false"
        buttonName="Accept"
        buttonNameTwo="Delete"
      />
    </div>
  );
};

export default FriendRequest;

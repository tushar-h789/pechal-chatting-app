import React from "react";
import TitleHolder from "./TitleHolder";
import UserPeople from "./UserPeople";

const BlockedUser = () => {
  return (
    <div className="groupholder">
      <TitleHolder title="Block Users" />
      <UserPeople userButton="true" singleButton="true" buttonName="Unblock" buttonNameTwo="accept" />
    </div>
  );
};

export default BlockedUser;

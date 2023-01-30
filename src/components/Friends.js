import React from "react";
import TitleHolder from "./TitleHolder";
import UserPeople from "./UserPeople";

const Friends = (title) => {
  return (
    <div className="groupholder">
      <TitleHolder title="Friends"  />
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
      <UserPeople/>
    </div>
  );
};

export default Friends;

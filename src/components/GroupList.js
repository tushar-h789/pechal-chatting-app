import React from "react";
import GroupPeople from "./UserPeople";
import TitleHolder from "./TitleHolder";

const GroupList = () => {
  return (
    <div className="groupholder">
      <TitleHolder button="true" title="Groups List" />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
      <GroupPeople userButton="true" singleButton="false" buttonName="Join"  />
    </div>
  );
};

export default GroupList;

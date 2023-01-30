import TitleHolder from "./TitleHolder";
import UserPeople from "./UserPeople";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const db = getDatabase();
  let [userlist, setUserlist] = useState([]);

  let data = useSelector((state) => state);

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data.userdata.userInfo.uid != item.key) {
          // jodi ae conditaion ta thake tahole jei account a login kore ache sey account ta user list a show korbena.
          arr.push(item.val());
        }
      });
      setUserlist(arr);
    });
  }, []);
  return (
    <div className="groupholder">
      <TitleHolder title="User List" />
      {userlist.map((item) => (
        <UserPeople
          fname={item.displayName}
          email={item.email}
          userButton="true"
          singleButton="false"
          buttonName="Sent Request"
        />
      ))}
    </div>
  );
};

export default UserList;

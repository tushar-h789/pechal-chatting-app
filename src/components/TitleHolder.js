import React from "react";
import Button from "./Button";
import {HiOutlineDotsVertical} from "react-icons/hi"

const TitleHolder = ({title, button}) => {
  return (
    <div className="titleHolder">
      <h3>{title}</h3>
      {button ? <Button title="Create Group"/>: <HiOutlineDotsVertical/>}
    </div>
  );
};

export default TitleHolder;

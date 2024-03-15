import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Love",
    "Songs",
    "Cooking",
    "All",
    "Gaming",
    "Love",
    "Songs",
    "Cooking",
    "All",
    "Gaming",
  ];
  return (
    <div className="flex">
      {buttonList.map((item, index) => {
        return <Button name={item} key={index}></Button>;
      })}
    </div>
  );
};

export default Buttonlist;

import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <img
        className="h-8"
        alt="user-logo"
        src="https://static.thenounproject.com/png/3201587-200.png"
      ></img>
      <span className="font-bold px-2">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;

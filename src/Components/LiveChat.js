import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [livemessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages); //()
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling with fetch function
      console.log("Hiiii");
      dispatch(
        addMessage({ name: "Akshay saini", comment: "This is a live chat" })
      );
    }, 10000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage name={c.name} message={c.comment} />
        ))}
      </div>
      <form
        className="w-full p-2 m-2 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "rohith", comment: livemessage }));
        }}
      >
        <input
          className="border border-black w-64 px-2"
          value={livemessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-300 px-2 ml-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

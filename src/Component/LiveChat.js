import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";
import store from "../Utils/store";
import { generateRandomMessgae, generateRandomName } from "../Utils/help";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => {
    return store.chat.message;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessgae(),
          key : new Date().getTime()
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div 
      className="h-[720px] ml-2 p-2 outline outline-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"
    >
      {chatMessages.map((message) => (
        <ChatMessage
          name={message.name}
          key={message.key}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;

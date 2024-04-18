import React from "react";

const ChatIcon = () => {
  return (
    <div className="fixed z-50 bottom-4 right-4 flex flex-row items-center justify-end">
      <div
        className={`h-16 w-16 bg-green-600 rounded-full flex flex-col items-center justify-center cursor-pointer`}
      >
        <img src="/Assets/chat/chat.svg" alt="chat" className="w-3/5 h-auto" />
      </div>
    </div>
  );
};

export default ChatIcon;

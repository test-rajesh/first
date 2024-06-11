import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        notification,
        setNotification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatContextProvider;

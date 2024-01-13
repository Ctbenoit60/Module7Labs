import React, { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState('😃');

  const changeMood = () => {
    setEmoji((prevEmoji) => (prevEmoji === '😃' ? '🥲' : '😃'));
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

const useEmoji = () => {
  const context = useContext(EmojiContext);
  if (!context) {
    throw new Error("useEmoji must be used within an EmojiProvider");
  }
  return context;
};

export { EmojiProvider, useEmoji };

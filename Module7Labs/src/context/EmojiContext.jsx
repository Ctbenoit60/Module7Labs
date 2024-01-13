import React, { useState, useContext } from "react";

// Create a context 
const EmojiContext = React.createContext();

// Provide component 
export const EmojiProvider = ({ children }) => {
  // State to store the current emoji
  const [emoji, setEmoji] = useState("😃");

  const changeMood = () => {
    setEmoji(prevEmoji => prevEmoji === '😃' ? '🥲' : '😃');
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => useContext(EmojiContext);
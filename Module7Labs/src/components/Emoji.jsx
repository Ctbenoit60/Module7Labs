import React from "react";
import { useEmoji } from "../context/EmojiContext";

const Emoji = () => {
  const { emoji, changeMood } = useEmoji();

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;

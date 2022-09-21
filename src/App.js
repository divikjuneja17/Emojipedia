import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const emojiDictionary = {
    "😀": "Grinning Face",
    "🤩": "Star-Struck Face",
    "😉": "Winking Face",
    "🤑": "Money-Mouth Face",
    "🤔": "Thinking Face",
    "🙄": "Face with Rolling Eyes",
    "😪": "Sleepy Face",
    "🤓": "Nerd Face",
    "😥": "Sad but Relieved Face",
    "😞": "Disappointed Face"
  };

  let emojisWeKnow = Object.keys(emojiDictionary);

  function emojiInputHandler(event) {
    let emojiMeaning = emojiDictionary[event.target.value];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this emoji in our database.";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    let emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#f5f3ff" }}>Emoji Interpreter</h1>
      <input
        placeholder="Put an emoji here to interpret its meaning."
        style={{ fontSize: "1.2rem", border: "2px solid black" }}
        onChange={emojiInputHandler}
      />
      <h3 style={{ color: "#f5f3ff" }}> {emojiMeaning} </h3>
      <div
        style={{ margin: "1rem", fontSize: "1.2rem", fontWeight: "500" }}
      ></div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

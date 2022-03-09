import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queRenderWithEmojiValue] = useState("");
  const [storedValueFromCurrentRender, queRenderWithStoredValue] = useState<string[]>([""]);

  const HandleRenderClockEmoji = () => {
    queRenderWithStoredValue([...storedValueFromCurrentRender, emojiValueFromCurrentRender, ]);
    queRenderWithEmojiValue("⏰");
  };

  const HandleRenderPanEmoji = () => {
    queRenderWithStoredValue([...storedValueFromCurrentRender, emojiValueFromCurrentRender]);
    queRenderWithEmojiValue("🍳");
  };

  const HandleRenderPlateEmoji = () => {
    queRenderWithStoredValue([...storedValueFromCurrentRender, emojiValueFromCurrentRender]);
    queRenderWithEmojiValue("🍽️");
  };

  const HandleRenderSmileEmoji = () => {
    queRenderWithStoredValue([...storedValueFromCurrentRender, emojiValueFromCurrentRender]);
    queRenderWithEmojiValue("😋");
  };

  const HandleRenderBedEmoji = () => {
    queRenderWithStoredValue([...storedValueFromCurrentRender, emojiValueFromCurrentRender]);
    queRenderWithEmojiValue("🛌");
  };

  return (
    <div>
      <h1>Emoji Picker</h1>
      <p>Your old emojis are: {storedValueFromCurrentRender.join(", ")} </p>
      <p>Your current emoji: {emojiValueFromCurrentRender}</p>

      <button onClick={HandleRenderClockEmoji}>⏰</button>
      <button onClick={HandleRenderPanEmoji}>🍳</button>
      <button onClick={HandleRenderPlateEmoji}>🍽️</button>
      <button onClick={HandleRenderSmileEmoji}>😋</button>
      <button onClick={HandleRenderBedEmoji}>🛌</button>
    </div>
  );
}

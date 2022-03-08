import { useState } from "react";

export default function EmojiPicker (): JSX.Element{
    
    const [emojiValueFromCurrentRender, queRenderWithEmojiValue] = useState ("")
    const [storedValueFromCurrentRender, queRenderWithStoredValue] = useState ("")

    const HandleRenderClockEmoji = () => {
        queRenderWithStoredValue(emojiValueFromCurrentRender)
        queRenderWithEmojiValue("⏰") 
    }

    const HandleRenderPanEmoji = () => {
        queRenderWithStoredValue(emojiValueFromCurrentRender)

        queRenderWithEmojiValue("🍳")
    }
   
    const HandleRenderPlateEmoji = () => {
        queRenderWithStoredValue(emojiValueFromCurrentRender)
        queRenderWithEmojiValue("🍽️")
    }

    const HandleRenderSmileEmoji = () => {
        queRenderWithStoredValue(emojiValueFromCurrentRender)
        queRenderWithEmojiValue("😋")
    }

    const HandleRenderBedEmoji = () => {
        queRenderWithStoredValue(emojiValueFromCurrentRender)
        queRenderWithEmojiValue("🛌")
    }
    
return (
     <div>
        <h1>Emoji Picker</h1>
        <p>Your old emoji: {storedValueFromCurrentRender} </p>
        <p>Your current emoji: {emojiValueFromCurrentRender}</p>

        <button onClick={HandleRenderClockEmoji}>⏰</button>
        <button onClick={HandleRenderPanEmoji}>🍳</button>
        <button onClick={HandleRenderPlateEmoji}>🍽️</button>
        <button onClick={HandleRenderSmileEmoji}>😋</button>
        <button onClick={HandleRenderBedEmoji}>🛌</button>
    </div>
    )
}

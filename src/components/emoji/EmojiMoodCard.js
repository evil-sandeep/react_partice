import React, { useState } from 'react';


const EmojiMoodCard = ({ emoji, mood, message, reason }) => {

    const [showreason, setShowReason] = useState(false)

    const toggleButton = () => {
        setShowReason(!showreason)
    }


    return (
        <div>
            <div>{emoji}</div>
            <h2>{mood}</h2>
            <p>{showreason ? reason : message}</p>

            <button onClick={toggleButton}> {showreason ? 'hide reason ' : 'why '}</button>
        </div>

    )
}

export default EmojiMoodCard;
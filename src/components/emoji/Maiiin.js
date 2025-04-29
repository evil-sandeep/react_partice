import React from 'react'
import EmojiMoodCard from './EmojiMoodCard'

const Maiiin =()=>{
    return(
        <div>
            <EmojiMoodCard 
        emoji="😊" 
        mood="Happy" 
        message="You look cheerful!" 
        reason="Because it's sunny today!" 
      />
      <EmojiMoodCard 
        emoji="😢" 
        mood="Sad" 
        message="Feeling down?" 
        reason="Because I miss someone." 
      />
      <EmojiMoodCard 
        emoji="😡" 
        mood="Angry" 
        message="Why the frown?" 
        reason="Because someone cut in line!" 
      />
        </div>
    )
}
export default Maiiin
import React, { useState } from 'react'

const CharacterCountr = () => {
    const [character, setCharacter] = useState('')


    const chCountr = (e) => {
        setCharacter(e.target.value)

    }
    

    return (
        <div>
            <input type="text"
                placeholder='TYpe something in it '
                onChange={(e) => chCountr(e)} />

                <h1>{character}</h1>
                <h2>character of the sentence will be :-{character.length}</h2>
        </div>
    )
}

export default CharacterCountr
// Lift State Up

// Create two components:

// InputBox — where user types text

// DisplayBox — shows the same text
// Both should be connected using a common parent component via props and state.

import React, { useState } from 'react'

const LiftState = () => {
    const [input, setInput] = useState('')
    const [displayBox,setDisplayBox]=useState(input)
   


    return (
        <div>
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeHolder='type something'
            />
            <h1>{displayBox}</h1>
        </div>
    )
}
export default LiftState
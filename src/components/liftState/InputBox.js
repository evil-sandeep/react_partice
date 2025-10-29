import React from 'react'

const InputBox = (props) => {
    return (
        <div>
            <input type="text"
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}
                placeholder='enter text'
            />
        </div>
    )
}

export default InputBox
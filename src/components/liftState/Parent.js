import React, { useState } from 'react'
import InputBox from './InputBox'
import Displaybox from './Displaybox'
const Parent = () => {
    const [input, setInput] = useState('')

    return (
        <div>
            <InputBox input={input} setInput={setInput} />
            <Displaybox input={input}/>

        </div>
    )
}
export default Parent
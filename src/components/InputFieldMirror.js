import React, { useState } from 'react'

const InputFieldMirror = () => {
    const [text, setText] = useState('')

    const textChange = (e) => {

        setText(e.target.value)
    }

    return (
        <div>
            <div  className='text-center m-2 w-auto'>
                <input
                    type="text"
                    placeholder='typeSomething'
                    onChange={(e) => textChange(e)}

                />
                <p className=''>Output:-{text}</p>
            </div>

        </div>
    )
}

export default InputFieldMirror
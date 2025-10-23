import React, { useState } from 'react'


const Partice = () => {
    const [count, setCount] = useState(0)
    const [hide, Unhide] = useState(true)
    const [text, setText] = useState('')



    const changeCounter = (no) => {
        if (no === '+') {
            setCount(prev => prev + 1)
        } else {
            setCount((prev) => {
                return prev - 1
            })
        }

    }

    const textChange = (e) => {
        setText(e.target.value)
    }
    return (

        <div>
            <div>
                {hide && <h1>I am touggle sentence</h1>}

                <button onClick={() => Unhide(!hide)} > {hide ? 'HIDE' : 'SHOW'} </button>
            </div>
            <br />

            <div>
                <button onClick={() => changeCounter('+')}>increment</button>
                <h1>{count}</h1>
                <button onClick={() => changeCounter('-')}>decrement</button>
            </div>
            <br />

            <div>
                <input type="text"
                    placeholder='typeSomething'
                    onChange={(e) => textChange(e)}

                />

                <p>{text}</p>
            </div>

        </div>
    )
}

export default Partice
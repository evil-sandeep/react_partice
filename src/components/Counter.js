import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    let noChange = (no) => {
        if (no === '+') {
            setCount(prev=>prev+1)
        } else {
            setCount(prev=>prev-1)
        }
    }

    return (
        <div className='text-center'>
            <button onClick={() => noChange('+')}  className='border m-3 w-32 h-32 border-l-black-200  text-6xl text-center  bg-emerald-300'>+</button>
            <h1 className='font-bold text-9xl'>{count}</h1>
            <button onClick={() => noChange('-')} className='border m-3 w-32 h-32 border-l-black-200  text-6xl text-center  bg-emerald-300'>-</button>
        </div>
    )
}

export default Counter
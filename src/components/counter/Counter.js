import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleChange = (e) => {
        const value = Number(e.target.value)
        if (!isNaN(value)) setCount(value);
    }
    return (
        <div>
            <h1> COunter app </h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="number"
                value={count}
                onChange={handleChange}
            />
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter;
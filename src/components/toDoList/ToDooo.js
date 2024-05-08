import React, { useState } from 'react'

const ToDooo = () => {
    const [list, setList] = useState('')
    const [updateMsg, setUpdateMsg] = useState([]);

    console.log(list)
    const submitHandler = () => {
        setUpdateMsg([...updateMsg,list])
        setList('')
    }

    return (
        <div>
            <input type="text" value={list}
                onChange={(e) => setList(e.target.value)} />
            <button type='submit' onClick={submitHandler}>Add</button>

            <div>
                <ul>
                    {updateMsg.map((m, i) => (
                        <li key={i}>{m}</li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default ToDooo
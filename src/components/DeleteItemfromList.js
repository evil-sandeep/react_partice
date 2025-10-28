import React, { useState } from 'react'

const DeleteItemfromList = () => {
    const [list, setList] = useState([])
    const [task, setTask] = useState('')

    const handleList = () => {
        if (task.trim() === '') return
        setList([...list, task])
        setTask('')
    }

    const deleteTask = (i) => {
        const updateList = [...list];
        updateList.splice(i, 1)
        setList(updateList)
    }
    return (
        <div>
            <div>Your TODO list</div>

            <div>
                <input type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='Your Task '
                />
                {task.length > 0 && (<button onClick={handleList}>Add</button>)}

            </div>

            <div>
                {list.map((l, i) => (
                    <li key={l}>{l} {<button onClick={() => deleteTask(i)}>X</button>}</li>
                ))}
            </div>



        </div>
    )
}

export default DeleteItemfromList
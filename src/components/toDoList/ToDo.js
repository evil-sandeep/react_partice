import React, { useState } from 'react'

const ToDo = () => {
    const [taskInput, setTaskInput] = useState('')
    const [tasks, setTasks] = useState([])


    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput])
            setTaskInput('')
        }
    }
    const removeTasks = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }
    return (
        <div>
            <input type="text"
                placeholder='Add pendig task'
                value={taskInput}
                onChange={e => setTaskInput(e.target.value)} />

            <button onClick={addTask}>Add</button>


            <div>
                <ul>
                    {tasks.map((t, i) => (
                        <li key={i}>{t} <button onClick={() => removeTasks(i)}>x</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDo
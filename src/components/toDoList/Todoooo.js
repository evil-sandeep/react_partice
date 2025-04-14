import React, { useState } from 'react';

const Todoooo = () => {

    const [tinput, setTinput] = useState('')
    const [tasks, setTasks] = useState([])

    const addTasks = () => {
        if (tinput.trim() !== '') {
            setTasks([...tasks, tinput]);
            setTinput('')
        }
    }

    const removeTodo = (i) => {
        const deleteTodo = [...tasks];
        deleteTodo.splice(i, 1);
        setTasks(deleteTodo)
    }

    return (
        <div>
            <div>
                <input type='text'
                    placeholder="add work"
                    value={tinput}
                    onChange={(e) => setTinput(e.target.value)}
                />
                <button onClick={addTasks}> Add</button>

            </div>

            <div>
                <ul>
                    {tasks.map((t, i) => (
                        <li key={i}>{t} <button onClick={()=>removeTodo(i)}>delete</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Todoooo;
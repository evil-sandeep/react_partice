import React, { useState } from 'react'
import { useHook } from './useHook';

const ToDolist = () => {
    const [todo, setToDo] = useState('');
    const { addNote } = useHook()
    const addTask = () => {
        if (todo.trim() !== '') {
            setToDo('')
            addNote(todo)
        }

    }

    return (
        <div>
            <div>
                <textarea name="text" id="text" cols="30" rows="10"
                    value={todo}
                    onChange={(e) => { setToDo(e.target.value) }}
                ></textarea>
                <button onClick={addTask}>Add</button>
            </div>


        </div>
    )
}

export default ToDolist
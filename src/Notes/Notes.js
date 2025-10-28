import React from 'react'

const Notes = ({ note, setNotes }) => {
    const removeTask = (index) => {
        const updateNotes = [...note];
        updateNotes.splice(index, 1)
        setNotes(updateNotes)
    }
    return (
        <div>
            <ul>
                {note.map((n, i) => (
                    <li key={i}>{n} <button onClick={removeTask}>remove  </button></li>
                ))}
            </ul>
        </div>
    )
}

export default Notes
import React, { useState } from 'react'

const NoteContent = ({ addNotes }) => {
    const [notes, setNotes] = useState('')
    const handleAddNote = () => {
        addNotes(notes)
        setNotes('')
    }
    return (
        <div className='flex flex-wrap gap-3'>Enter Pending Task here

            <div className=' '  >
                <input type="text" name="text" id="txt"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)} />
                <button onClick={handleAddNote}>Add </button>
            </div>

        </div>
    )
}

export default NoteContent
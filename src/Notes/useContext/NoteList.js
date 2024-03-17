import React from 'react'
import { useHook } from './useHook'

const NoteList = () => {
  const { notes, removeNote } = useHook();
  return (
    <div>
      Notes List
      <ul>
        {notes.map((note, ind) => (
          <li key={ind}> {note} <button onClick={removeNote}>x</button></li>
        ))}
      </ul>
    </div>
  )
}

export default NoteList
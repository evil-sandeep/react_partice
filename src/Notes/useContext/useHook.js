import { createContext, useState,useContext } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    
    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    const removeNote = (index) => {
        const updateNote = [...notes]
        updateNote.splice(index, 1);
        setNotes(updateNote)
    }
    return (
        <NotesContext.Provider value={{ notes, addNote, removeNote }} >
            {children}

        </NotesContext.Provider>
    )
}

export const useHook = () => useContext(NotesContext)

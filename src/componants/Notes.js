import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react'
import NoteItem from './NoteItem';


function Notes() {

    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
        <div className="row my-3 mt-5">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>
    )
}

export default Notes

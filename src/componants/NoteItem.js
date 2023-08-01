import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="cardIcons position-absolute top-0 end-0">
                        <i className="fa-solid fa-trash mx-3" title='Delete' onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-regular fa-pen-to-square" title='Edit' onClick={()=>{updateNote(note)}} ></i>
                        </div>
                    </div>
                        <p className="card-text">{note.description}</p>
                        <p className="card-text opacity-75"><em>{note.tag}</em></p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem

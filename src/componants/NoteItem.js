import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;


    return (
        <div className="col-md-4 allNoteCardContainer">
            <div className="card my-3 allNoteCard">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="cardIcons position-absolute top-0 end-0 p-2">
                        <i className="fa-solid fa-trash mx-3" title='Delete' onClick={()=>{deleteNote(note._id); props.showAlert("Note removed successfully", "success")}}></i>
                        <i className="fa-regular fa-pen-to-square" title='Edit' onClick={()=>{updateNote(note);}} ></i>
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

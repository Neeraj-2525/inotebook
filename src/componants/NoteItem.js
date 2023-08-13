import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, permanentDeleteNote, restoreNote } = context;
    const { note, trashedNote, updateNote, section } = props;

    let firstIcon = <i className="fa-solid fa-trash mx-3 noteBtn" title='Delete' onClick={() => { deleteNote(note._id); props.showAlert("Note removed successfully", "success") }}></i>;
    let secondIcon = <i className="fa-regular fa-pen-to-square noteBtn" title='Edit' onClick={() => { updateNote(note); }} ></i>;

    const isTrashCond = (section === 'trash')

    if (isTrashCond) {
        firstIcon = <i className="fa-solid fa-trash mx-3 noteBtn" title='Delete Permanently' onClick={() => { permanentDeleteNote(trashedNote._id); props.showAlert("Note removed permanently", "success") }}></i>;
        secondIcon = <i className="fa-solid fa-arrow-rotate-left noteBtn" title='Restore' onClick={() => { restoreNote(trashedNote._id); props.showAlert("Note restored successfully", "success") }} ></i>;
    }

    return (
        <div className="col-md-4 col-xxl-3 allNoteCardContainer">
            <div className="card my-3 allNoteCard">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{!isTrashCond ? note.title : trashedNote.title}</h5>
                        <div className="cardIcons position-absolute top-0 end-0 p-2">
                            {firstIcon}
                            {secondIcon}
                        </div>
                    </div>
                    <p className="card-text">{!isTrashCond ? note.description : trashedNote.description}</p>
                    <p className="card-text opacity-75"><em>{!isTrashCond ? note.tag : trashedNote.tag}</em></p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem

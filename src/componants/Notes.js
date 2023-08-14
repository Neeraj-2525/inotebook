import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/noteContext"
import Noteitem from './NoteItem';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote, loading } = context;
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    // ******* auto height of textbox *********

    const txHeight = 70;
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
        if (tx[i].value === '') {
            tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
        } else {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        }
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput(e) {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    }

    return (
        <>
            {loading && <Loader />}
            {/* <AddNote /> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <textarea minLength={3} required type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea minLength={5} required type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <textarea type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary closeUpdateModalBtn" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn updateNoteBtn">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            {!loading && (
                <div className="row allNoteContainer d-flex m-l-r-t-b">
                    <div className="yourNotesHeading">
                        <h2>Your Notes</h2>
                    </div>
                    <div className="container text-center mt-5 fs-5">
                        {notes.length === 0 && 'No Notes To Display :('}
                    </div>
                    {notes.map((note) => {
                        return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} section={'allNotes'} />
                    })}
                </div>
            )}
        </>
    )
}

export default Notes
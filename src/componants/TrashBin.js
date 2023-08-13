import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import { useNavigate } from 'react-router-dom';
import NoteItem from './NoteItem';
import Loader from './Loader';
 

const TrashBin = (props) => {
    const context = useContext(noteContext);
    const { fetchDeletedNotes, deletedNotes, loading } = context;
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchDeletedNotes()
        }
        else {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])


    return (
        <>
        {loading && <Loader/>}
        {!loading && (
            <div className="row allNoteContainer d-flex m-l-r-t-b">
                <div className="yourNotesHeading trashBinHeading">
                    <h2>Trash Bin</h2>
                </div>
                <div className="container text-center mt-5 fs-5">
                    {deletedNotes.length === 0 && 'No notes available in the trash bin :)'}
                </div>
                {deletedNotes.map((note) => {
                    return <NoteItem key={deletedNotes._id} showAlert={props.showAlert} trashedNote={note} section={'trash'} />
                })}
            </div>
        )}
        </>
    )
}

export default TrashBin

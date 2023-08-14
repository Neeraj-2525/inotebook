import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/noteContext";
import NoteItem from './NoteItem';
import Loader from './Loader';


const Tags = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, getTags, editNote, tags, loading } = context;
  const [selectedTag, setSelectedTag] = useState('');
  // const [availableTags, setAvailableTags] = useState();
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes(selectedTag);
      getTags();
    }

    // eslint-disable-next-line
  }, [selectedTag]);


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


  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  // console.log(availableTags)
  return (
    <>
      {loading && <Loader />}
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
          <div className="yourNotesHeading tagsHeading">
            <h2>Tags</h2>
          </div>

          <div className="container text-center mt-5 fs-5">
            {tags === 0 && 'Create Notes to see tags :)'}
          </div>

          <div className="container my-3">
            <div className="d-flex flex-wrap">
              {tags.map((tag) => {
                return <div className="tag-container mx-2">
                  <button type='button' className="btn tag" onClick={() => handleTagClick(tag)}>
                    {tag}
                  </button>
                </div>
              })}
            </div>
          </div>

          {notes.map((note) => {
            return <NoteItem key={notes._id} updateNote={updateNote} showAlert={props.showAlert} note={note} section={'allNotes'} />
          })}
        </div>
      )}
    </>
  )
}

export default Tags

import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "General" })


    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note added successfully", "success")
    }

    const onChange = (e) => {
        const cleanedValue = e.target.name === 'tag' ? e.target.value.replace(/\s+/g, '') : e.target.value;
        setNote({ ...note, [e.target.name]: cleanedValue })
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
        <div>
            <div className=' my-1 p-5 addNoteForm'>
                <h1 className='mt-2'>Add Note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <textarea row={1} value={note.title} minLength={2} required type="text" onChange={onChange} name='title' className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea style={{ height: 'auto', minHeight: '50px' }} value={note.description} minLength={3} required type="text" onChange={onChange} name='description' className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <textarea value={note.tag} type="text" onChange={onChange} name='tag' className="form-control" id="tag" />
                    </div>

                    <button disabled={note.title.length < 2 || note.description.length < 3} type="submit" className="btn btn-light my-2 mt-2 addSubmitBtn" onClick={handleSubmit}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote

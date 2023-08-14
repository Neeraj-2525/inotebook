import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "0.0.0.0/0" || "http://localhost:5000";
  const notesInitial = []
  const tagsInitial = []
  const [notes, setNotes] = useState(notesInitial)
  const [deletedNotes, setDeletedNotes] = useState(notesInitial)
  const [userData, setUserData] = useState({ name: '', email: '', occupation: '', gender: '' })
  const [tags, setTags] = useState(tagsInitial); // State to store tags
  const [loading, setLoading] = useState(true)



  //get user
  const getUserData = async () => {
    setLoading(true)
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      },
    });

    const json = await response.json()
    setLoading(false)
    // console.log(json)
    const { name, email, occupation, gender } = json;
    setUserData({ name, email, occupation, gender });
  }

  // Get all Notes
  const getNotes = async (tag = null) => {
    setLoading(true)
    let fetchNotesURL = `${host}/api/notes/fetchallnotes`

    if (tag) {
      fetchNotesURL += `?tag=${tag}`;
    }

    // API Call 
    const response = await fetch(fetchNotesURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    
    setTimeout(() => {
      setLoading(false)
    }, 500);

    const filteredNotes = json.filter((note) => note.deletedAt === null);
    setNotes(filteredNotes);
  }

  // Get all the unique tags
  const getTags = async ()=>{
    setLoading(true)
    const response = await fetch(`${host}/api/notes/gettags`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setLoading(false)
    setTags(json);
  }



  // Get deleted Notes
  const fetchDeletedNotes = async () => {
    setLoading(true)
    const response = await fetch(`${host}/api/notes/fetchdeletednotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    setTimeout(() => {
      setLoading(false)
    }, 500);
    setDeletedNotes(json);
  }


  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setLoading(false)
    setNotes(notes.concat(note))

  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    // const json = response.json();
    console.log(response.json())
    getNotes();
    // const newNotes = notes.filter((note) => { return note.deletedAt === null })
    // setNotes(newNotes)
  }


  // To restore the deleted Note
  const restoreNote = async (id) => {
    setLoading(true)
    const response = await fetch(`${host}/api/notes/restore/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    console.log(response.json())

    const newTrashNotes = deletedNotes.filter((deletedNote) => { return deletedNote.deletedAt !== null })
    setDeletedNotes(newTrashNotes)
    setLoading(false)
    fetchDeletedNotes()
  }

  // To Permanantly Delete a Note
  const permanentDeleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/permanentlydelete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    console.log(response.json())
    setLoading(true)
    fetchDeletedNotes();
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = await response.json();
    console.log(response.json())


    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setLoading(false)
    setNotes(newNotes);
  }



  return (
    <NoteContext.Provider value={{ notes, userData, deletedNotes, tags, loading, addNote, deleteNote, permanentDeleteNote, editNote, getUserData, getNotes, getTags, fetchDeletedNotes, restoreNote }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
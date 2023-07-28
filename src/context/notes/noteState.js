import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        },
        
        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        },

        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        },

        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        },
        
        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        },
        
        {
            "_id": "64c373925d9161bfc6973fcd",
            "user": "64bf5ef0e2b8a9a7bd4883cd",
            "title": "Hello this is the title",
            "description": "Hello there this is the description",
            "tag": "personal",
            "date": "2023-07-28T07:51:46.070Z",
            "__v": 0
        }
        
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"

const UserProfileIcon = (props) => {

    const context = useContext(noteContext);
    const { getUserData, userData } = context;

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUserData()
        }
        else {
            navigate('/home/allnotes')
        }
        // eslint-disable-next-line
    }, [])

    // TO CAPITALIZE FIRST LETTER OF A WORD
    function capitlizeText(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className="user-details">
            <Link to='/home/userprofile' className="user-circle" title='Profile' >
                <i className="fa-regular fa-user"></i>
            </Link>
            <span>{capitlizeText(userData.name)}</span>
        </div>
    )
}


export default UserProfileIcon

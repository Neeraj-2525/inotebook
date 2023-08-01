import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeftNavbar = () => {
  let location = useLocation();
  
  return (
    <>
      <ul className="form">
        <li className={`home ${location.pathname==="/home"? "activeFormEle": ""}`}>
          <Link to="/home">
            <i className="fa-solid fa-house"></i> <br /> Home
          </Link>
        </li>
        <li className={`allNotes ${location.pathname==="/home/allnotes"? "activeFormEle": ""}`}>
          <Link to="/home/allnotes">
            <i className="fa-solid fa-note-sticky"></i> <br /> All Notes
          </Link>
        </li>
        <li className={`trash ${location.pathname==="/home/trash"? "activeFormEle": ""}`}>
          <Link to="/home/trash">
            <i className="fa-regular fa-trash-can"></i> <br /> Trash
          </Link>
        </li>
        <li className={`tags ${location.pathname==="/home/tags"? "activeFormEle": ""}`}>
          <Link to="/home/tags">
            <i className="fa-solid fa-tags"></i> <br /> Tags
          </Link>
        </li>
        <li className={`theme ${location.pathname==="/home/theme"? "activeFormEle": ""}`}>
          <Link to="/home/theme">
            <i className="fa-solid fa-sun"></i> <br /> Theme
          </Link>
        </li>
        <li className={`logout ${location.pathname==="/"? "activeFormEle": ""}`}>
          <Link to="/">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> <br /> Logout
          </Link>
        </li>
      </ul>
    </>
  )
}

export default LeftNavbar

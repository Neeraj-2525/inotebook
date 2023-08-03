import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeftNavbar = () => {
  let location = useLocation();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
  }
  
  return (
    <>
      <ul className="form">
        <li className={`home ${location.pathname==="/home"? "activeFormEle": ""}`}>
          <Link to="/home">
          <i class="fa-solid fa-plus"></i> <br /> Add Note
          </Link>
        </li>
        <li className={`allNotes ${location.pathname==="/home/allnotes"? "activeFormEle": ""}`}>
          <Link to="/home/allnotes">
            <i className="fa-solid fa-note-sticky"></i> <br /> All Notes
          </Link>
        </li>
        <li className={`trashBin ${location.pathname==="/home/trashbin"? "activeFormEle": ""}`}>
          <Link to={location.pathname}>
            <i className="fa-regular fa-trash-can"></i> <br /> Trash
          </Link>
        </li>
        <li className={`tags ${location.pathname==="/home/tags"? "activeFormEle": ""}`}>
          <Link to={location.pathname}>
            <i className="fa-solid fa-tags"></i> <br /> Tags
          </Link>
        </li>
        <li className='theme' >
          <Link to={location.pathname}>
            <i className="fa-solid fa-sun"></i> <br /> Theme
          </Link>
        </li>
        <li className={`logout ${location.pathname==="/"? "activeFormEle": ""}`} onClick={handleLogout}>
          <Link to="/">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> <br /> Logout
          </Link>
        </li>
      </ul>
    </>
  )
}

export default LeftNavbar

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConfirmWindow from './ConfirmWindow';

const LeftNavbar = () => {
  let location = useLocation();
  const [showModal, setShowModal] = useState(false); 

  const handleLogout = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  return (
    <>
      <ul className="form">
        <li className={`home ${location.pathname==="/home"? "activeFormEle": ""}`}>
          <Link to="/home">
          <i className="fa-solid fa-plus"></i> <br /> Add Note
          </Link>
        </li>
        <li className={`allNotes ${location.pathname==="/home/allnotes"? "activeFormEle": ""}`}>
          <Link to="/home/allnotes">
            <i className="fa-solid fa-note-sticky"></i> <br /> All Notes
          </Link>
        </li>
        <li className={`trashBin ${location.pathname==="/home/trashbin"? "activeFormEle": ""}`}>
          <Link to="/home/trashbin">
            <i className="fa-regular fa-trash-can"></i> <br /> Trash
          </Link>
        </li>
        <li className={`tags ${location.pathname==="/home/tags"? "activeFormEle": ""}`}>
          <Link to="/home/tags">
            <i className="fa-solid fa-tags"></i> <br /> Tags
          </Link>
        </li>
        <li className='theme' >
          <Link to={location.pathname}>
            <i className="fa-solid fa-sun"></i> <br /> Theme
          </Link>
        </li>
        <li className={`logout ${location.pathname==="/home/logout"? "activeFormEle": ""}`} onClick={handleLogout}>
          <Link to={location.pathname}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> <br /> Logout
          </Link>
        </li>
        <ConfirmWindow showModal={showModal} handleCloseModal={handleCloseModal} />
      </ul>
    </>
  )
}

export default LeftNavbar

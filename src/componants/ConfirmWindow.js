import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmWindow = ({ showModal, handleCloseModal }) => {
  const navigate = useNavigate();
  
  const handleYesClick = ()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  
  return (
    <>
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content confirmWindowModal">
            <div className="modal-header">
              <h1 className="modal-title fs-5 fw-2">Sign Out</h1>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button> */}
            </div>
            <div className="modal-body">
              Are you going this soon?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>No, Thanks</button>
              <button type="button" className="btn btn-primary" onClick={handleYesClick}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmWindow

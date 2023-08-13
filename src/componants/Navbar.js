import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    let location = useLocation();

    return (
        <nav className="navbar navbar-dark navbar-expand-lg ">
            <div className="container">
                <Link className="navbar-brand" to="/">iNotes</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link outline-primary ${location.pathname === "/#services" ? "active" : ""}`} to="/#services">Our Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/#contactus" ? "active" : ""}`} to="/#contactus">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/#help" ? "active" : ""}`} to="/#help">Help</Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    <Link className="btn btn-outline-primary mx-3 nav-item" to="/login" role='button'>Login</Link>
                    <Link className="btn btn-outline-info nav-item" to="/signup" role='button'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

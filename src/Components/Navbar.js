import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css'

function Navbar() {
    
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <div className="container">
                    <a className="navbar-brand text-danger" href="#" style={{fontFamily:'Alumni Sans Collegiate One', fontSize:"29px"}} >Fashion Studio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontFamily:'Roboto Condensed', fontSize:'20px'}}>
                            <NavLink className="navlink-wrap" to="/">Home</NavLink>
                            <NavLink className="navlink-wrap" to="/collections">Collections</NavLink>
                            <NavLink className="navlink-wrap"  to="/about-us">About Us</NavLink>
                            <NavLink className="navlink-wrap"  to="/contact-us">Contact Us</NavLink>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

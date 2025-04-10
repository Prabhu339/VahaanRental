import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./Assets/logo.jpg"

const Header = () => {
  return (
    <div >
       <nav
        className="navbar navbar-expand-sm text-white "
       >
        <div className="container hbg text-light">
            <NavLink className="navbar-brand text-white" to="/">
            <img src={logo} className='logo'/>
           <b> Vahaan<span className='logon'>Rentals</span></b></NavLink>
            <button
                className="navbar-toggler d-lg-none bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item white text-white">
                        <NavLink className="nav-link active text-white" to="/" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink     className="nav-link text-white" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink     className="nav-link text-white" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink     className="nav-link text-white" to="/join">Join_Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink     className="nav-link text-white" to="/blog">Blog</NavLink>
                    </li>
                 
                </ul>
               
            </div>
        </div>
       </nav>
       
    </div>
  )
}

export default Header
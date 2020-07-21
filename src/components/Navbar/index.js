import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = props =>{

    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/tech-blog">Home</NavLink></li>
                <li><NavLink to="/about-me">About Me</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

const Navbar = props =>{

    const [search, setSearch] = useState(false)

    const submitSerach = (e) =>{
        e.preventDefault()
        alert("Searched")
    }

    const openSearch = () =>{
        setSearch(true);
    }

    const searchClass = search? "searchInput active" : "searchInput"

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
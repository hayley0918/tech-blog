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
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-me">About Me</NavLink></li>
                <li><NavLink to="post">Posts</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSerach}>
                    <input className={searchClass} type="text" placeholder="Search"/>
                    <img onClick={openSearch} className="searchIcon" src={require("../../assets/icons/search.png")} alt="Search"/>
                </form>
            </div>
        </div>
    )
}

export default Navbar
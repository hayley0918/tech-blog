import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Logo = props =>{
    return(
        <div className="logo">
            <NavLink to="/">Hayley's tech note</NavLink>
            <img src="https://media.giphy.com/media/f6hnhHkks8bk4jwjh3/giphy.gif" alt="coding cat"/>
        </div>
    )
}

export default Logo;
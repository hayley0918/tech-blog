import React from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

const Header = props =>{
    return(
       <header className="header">
           <nav className="headerMenu">
                <li><NavLink to="/tech-blog">Home</NavLink></li>
                <li><NavLink to="/about-me">About Me</NavLink></li>
           </nav>
           <div className="sns-icons">
               <a href="https://github.com/hayley0918"><img src={require("../../assets/icons/github.png")} alt="github icon"/></a>
               <a href="https://www.linkedin.com/in/hayleychoi/"><img src={require("../../assets/icons/linkedin.png")} alt="linkedin icon"/></a>
               <a href="https://techyhayley-portfolio.netlify.app/"><img src={require("../../assets/icons/portfolio.png")} alt="linkedin icon"/></a>
           </div>
       </header>
    )
}

export default Header;
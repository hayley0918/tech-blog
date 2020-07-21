import './style.css'
import { NavLink } from 'react-router-dom'

const Navbar = props =>{

    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-me">About Me</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
import React from 'react'
import './style.css'

const AboutMe = props =>{
    return(
        <div className="aboutMe">
            <h2>About</h2>
            <p>Hi My name is Hayley and I am a graduate from General Assembly in Melbourne. I love coding and building web applications. It is exciting, fun and dynamic! I enjoy learning new things and developing my skill sets.</p>
            <h2>Skills</h2>
            <ul>
                <li>JavaScript(NodeJS, Express, React)</li>
                <li>Postgres SQL</li>
                <li>Ruby(Sinatra)</li>
                <li>Html, CSS</li>
                <li>Github</li>
            </ul>
            <h2>Contact Me</h2>
            <a href="https://www.linkedin.com/in/hayleychoi/">LinkedIn</a>
            <a href="https://techyhayley-portfolio.netlify.app/">Portfolio</a>
            <a href="https://github.com/hayley0918">Github</a>
        </div>
    )
}

export default AboutMe;
import React from 'react'
import './style.css'
import Sidebar from '../../components/Sidebar'


const AboutMe = props =>{
    return(
        <div className="home-container">
            <div className="aboutMe">
                <div className="aboutMe-wrapper">
                    <div className="about">
                        <h2>About</h2>
                        <p>Hi My name is Hayley and I am a graduate from General Assembly in Melbourne. I enjoy coding and building web applications. It is exciting, fun and dynamic! I love learning new technologies and developing my skill sets. It is also exciting developing programmatic thinking skills. It is fascinating that I can build and develop working applications and the sense of accomplishment after solving 
                        challenging problems. I am eager to be better at programming and learn about tools around them. </p>
                    </div>
                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript(NodeJS, Express, React)</li>
                            <li>Postgres SQL</li>
                            <li>Ruby(Sinatra)</li>
                            <li>Html, CSS</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>Projects</h2>
                            <ul>
                                <li><a href="https://hayley0918.github.io/03-project1-Tic-Tac-Toe/">Tic Tac Toe</a></li>
                                <li><a href="https://fast-ocean-73494.herokuapp.com/">Christmas Wishlist</a></li>
                                <li><a href="https://hayley0918.github.io/weather-app/">Weather app</a></li>
                                <li><a href="https://agile-oasis-81580.herokuapp.com/login">Bootfinds</a></li>
                            </ul>
                    </div>
                    <div className="skills">
                        <h2>Contact Me</h2>
                            haleychoi0918@gmail.com
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default AboutMe;
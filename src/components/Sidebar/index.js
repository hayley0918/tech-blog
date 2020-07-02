import React from 'react'
import './style.css'
import Card from '../UI/Card'

const Sidebar = (props) =>{
    return(
        <div className="side-bar-container">
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>About Me</span>
                </div>
                <div className="profile-image-container">
                    <img src={require("../../blogPostImages/myPhoto.png")} alt="my picture"/>
                </div>
                <div className="card-body">
                    <p className="bio">My name is Hayley. I code, learn and solve the problems.</p>
                </div>
            </Card>  
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>Social Network</span>
                </div>
            </Card>  
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>Recent posts</span>
                </div>
                <div className="recent-posts">
                    <div className="recent-post">
                        <h3>Post Title</h3>
                        <span>2, July, 2020</span>
                    </div>
                </div>
            </Card>  
        </div>
    )
}

export default Sidebar;
import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'


const Sidebar = props =>{

    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        const posts = blogPost.data
        setPosts(posts)
    },[posts])

    return(
        <div className="side-bar-container" style={{width: props.width}}>
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>About Me</span>
                </div>
                <div className="profile-image-container">
                    <img src={require("../../blogPostImages/myPhoto.png")} alt="my picture"/>
                </div>
                <div className="card-body">
                    <p className="bio">My name is Hayley. I code, grow the web applications and solve the problems.</p>
                </div>
            </Card>  
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>Social Network</span>
                    <div className="sns-icons">
                        <a href="https://github.com/hayley0918"><img src={require("../../assets/icons/github.png")} alt="github icon"/></a>
                        <a href="https://www.linkedin.com/in/hayleychoi/"><img src={require("../../assets/icons/linkedin.png")} alt="linkedin icon"/></a>
                        <a href="https://techyhayley-portfolio.netlify.app/"><img src={require("../../assets/icons/portfolio.png")} alt="linkedin icon"/></a>
                    </div>
                </div>
            </Card>  
            <Card style={{marginBottom:"20px", padding:"20px", boxSizing: "border-box"}}>
                <div className="card-header">
                    <span>Recent posts</span>
                </div>
                <div className="recent-posts">
                    {
                        posts.map(post=>{
                            return(
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recent-post">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </Card>  
        </div>
    )
}

export default Sidebar;
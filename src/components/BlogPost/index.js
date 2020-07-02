import React from 'react'
import './style.css'
import Card from '../UI/Card'

const BlogPost = () =>{
    return(
        <div className="blog-post-container">
            <Card>
                <div className="blog-header">
                    <span className="blog-category">Featured</span>
                    <h1 className="post-title">What is OOP?</h1>
                    <span className="posted-on">posted on 2/07/2020</span>
                </div>

                <div className="post-image-container">
                    <img src={require('../../blogPostImages/oop.jpeg')} alt="post image"/>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost;
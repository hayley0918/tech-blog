import './style.css'
import Card from '../UI/Card'
import React, { useState, useEffect } from 'react'
import blogPost from '../../data/blog.json'

const BlogPost = (props) =>{

    const [post, setPost] = useState({
        id: 1,
        blogCategory: "",
        blogTitle : "",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        postP1: "",
        postP2: "",
        postP3: "",
        postP4: "",
        postP5: "",
        postP6: "",
        postP7: "",
        postP8: "",
        postP9: "",
        postP10: "",
        postP11: ""
    })
    const [postId, setPostId] = useState('')
    
    useEffect(()=>{
        const postId = props.match.params.postId
        const post = blogPost.data.find(post => post.id == postId)
        setPost(post)
        setPostId(postId)
    },[post, props.match.params.postId])

    if(post.blogImage == "") return null

    return(
        <div className="blog-post-container">
            <Card>
                <div className="blog-header">
                    <span className="blog-category">{post.blogCategory}</span>
                    <h1 className="post-title">{post.blogTitle}</h1>
                    <span className="posted-on">posted on {post.postedOn}</span>
                </div>
                <div className="post-image-container">
                    <img src={require(`../../blogPostImages/`+post.blogImage)} alt="post image"/>
                </div>
                <div className="post-content">
                    <h3>{post.blogTitle}</h3>
                    <article>
                        <p>{post.postP1}</p>
                        <p>{post.postP2}</p>
                        <p>{post.postP3}</p>
                        <p>{post.postP4}</p>
                        <p>{post.postP5}</p>
                        <p>{post.postP6}</p>
                        <p>{post.postP7}</p>
                        <p>{post.postP8}</p>
                        <p>{post.postP9}</p>
                        <p>{post.postP10}</p>
                        <p>{post.postP11}</p>
                    </article>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost;
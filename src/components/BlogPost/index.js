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
        postP3: ""
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
                        <header>
                            {post.postP1}
                        </header>
                        <main>
                            {post.postP2}
                        </main>
                        <footer>
                            {post.postP3}
                        </footer>
                    </article>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost;
import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'

const Post = () =>{
    return(
        <section className="container">
            <BlogPost />
            <Sidebar />
        </section>
    )
}

export default Post;
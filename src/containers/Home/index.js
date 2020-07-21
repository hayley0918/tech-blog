import React from 'react'
import './style.css'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/UI/Card'
import { NavLink } from 'react-router-dom'

const Home = props =>{

    return(
        <div>
            <section className="home-container">
                <div style={{width:'70%'}}>
                    <Card style={{marginBottom:'20px'}}>
                        <div className="post-image-wrapper">
                            <img style={{margin:'20px 0'}} src={require('../../blogPostImages/oop2.jpeg')} alt="oop image"/>
                        </div>
                        <div className="home-post-text" style={{textAlign:'center'}}>
                            <span>Programming</span>
                            <h2>What is OOP?</h2>
                            <p>OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them...</p>
                            <div><NavLink to="/post/1">Read more</NavLink></div>
                        </div>
                    </Card>
                    <Card style={{marginBottom:'20px'}}>
                        <div className="post-image-wrapper">
                            <img style={{margin:'20px 0'}} src={require('../../blogPostImages/restful_api.png')} alt="rest_api image"/>
                        </div>
                        <div className="home-post-text" style={{textAlign:'center'}}>
                            <span>Programming</span>
                            <h2>Rest API</h2>
                            <p>A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. It is also referred to as a RESTful web service or REST API is based on representational state transfer (REST), an architectural style and approach to communications often used in web services development...</p>
                            <div><NavLink to="/post/2">Read more</NavLink></div>
                        </div>
                    </Card>
                    <Card style={{marginBottom:'20px'}}>
                        <div className="post-image-wrapper">
                            <img style={{margin:'20px 0'}} src={require('../../blogPostImages/tdd.png')} alt="tdd image"/>
                        </div>
                        <div className="home-post-text" style={{textAlign:'center'}}>
                            <span>Programming</span>
                            <h2>TDD</h2>
                            <p>Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass...</p>
                            <div><NavLink to="/post/3">Read more</NavLink></div>
                        </div>
                    </Card>
                </div>
                <Sidebar />
            </section>
        </div>
    )
}

export default Home;
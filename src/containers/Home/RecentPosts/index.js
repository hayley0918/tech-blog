import React from 'react'

const RecentPosts = props =>{
    return(
        <div style={{width:'70%'}}>
            <Card style={{marginBottom:'20px'}}>
                <div className="post-image-wrapper">
                    <img src={require('../../blogPostImages/laptop1.jpg')} alt="laptop image"/>
                </div>
                <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>OOP</h2>
                    <span>lorem ipsum</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore explicabo quisquam earum dicta, sequi autem ab, alias qui distinctio officia, error voluptatum delectus rem repellat doloribus beatae harum amet quod!</p>
                    <button>Read More</button>
                </div>
            </Card>
        </div>
    )
}

export default RecentPosts
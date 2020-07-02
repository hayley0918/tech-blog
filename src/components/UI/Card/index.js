import React from 'react'
import './style.css'

const Card = props =>{
    return(
        <div className="card" style={props.style} {...props}>
            {props.children}
        </div>
    )
}

export default Card;
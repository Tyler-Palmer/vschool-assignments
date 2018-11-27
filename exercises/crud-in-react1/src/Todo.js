import React from 'react'

const Todo = (props) =>{
    const {title, description} = props
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Description: {description}</h3>
        </div>
    )
}

export default Todo
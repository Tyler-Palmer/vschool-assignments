import React from 'react'

const Todo = (props) =>{
    const {title, description, handleDelete, id} = props
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Description: {description}</h3>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Todo
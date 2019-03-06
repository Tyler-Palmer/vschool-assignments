import React from 'react'

const Todo = props => {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Todo
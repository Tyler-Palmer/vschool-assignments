import React from 'react'

const AddGameForm = props => {
    const { handleSubmit, handleChange, userInputs: { title }} = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                name="title" 
                onChange={handleChange} 
                placeholder="Title"/>
            <button>Submit</button>
        </form>
    )
}

export default AddGameForm
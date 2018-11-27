import React from 'react'
import PropTypes from 'prop-types'

const StarWarsForm = props => {
    const { handleSubmit, handleChange, name, lightsaber } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                name="name" 
                onChange={handleChange}/>
            <input 
                type="text" 
                placeholder="Lightsaber Color" 
                value={lightsaber} 
                name="lightsaber" 
                onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

StarWarsForm.propTypes = {
    name: PropTypes.string.isRequired,
    lightsaber: PropTypes.string.isRequired, 
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default StarWarsForm
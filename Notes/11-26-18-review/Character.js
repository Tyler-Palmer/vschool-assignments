import React from 'react'
import PropTypes from 'prop-types'

const Character = props => {
    const { name, lightsaber } = props

    const styles = {
        backgroundColor: lightsaber
    }

    return (
        <div style={ styles }>
            <h1>Name: {name}</h1>
            <h3>Lightsaber color: {lightsaber}</h3>
        </div>
    )
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    lightsaber: PropTypes.string.isRequired
}


export default Character


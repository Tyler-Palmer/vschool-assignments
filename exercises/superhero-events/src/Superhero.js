import React from 'react'

const Superhero = (props) => {
    let {name, image, catchphrase, speak, id} = props
    return (
        <div onClick={() => speak(id)}>
            <h1>Name: {name}</h1>
            <img src={image}></img>
            <h3>{catchphrase}</h3>
        </div>
    )
}



export default Superhero
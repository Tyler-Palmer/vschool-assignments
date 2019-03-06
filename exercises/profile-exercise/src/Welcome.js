import React from 'react'

const Welcome = (props) => {
    return(
        <div class ="profile">
            <h1>Hello {props.name}</h1>
            <h3>Email: {props.email}</h3>
            <h3>Phone: {props.phone}</h3>
            <img src={props.image}></img>
        </div>
    )
}

export default Welcome
import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = (props) =>{
    return(
        <div className ="sidebar">
          {props.people.map((person, id) =>
                <Link to = {`/${id +1}`}>
                    <h1>Name: {person.name} </h1>
                    <h3> Height: {person.height}</h3>
                </Link>
            )}
        </div>
    )
}

export default Sidebar
import React from 'react'
import Pet from './Pet'
const Friend = (props) => {
    const {name, age, pets} = props
    return(
        <div className="people">
            <h1>{name}</h1>
            <h3>{age}</h3>
            <ul>
                {
                pets.map(pet =>
                    <Pet name={pet.name}/>
                )}
            </ul>
        </div>
    )
}






export default Friend
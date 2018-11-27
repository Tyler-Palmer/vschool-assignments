import React from 'react'

const HitTarget = props =>{
    const {name, image, key} = props
    return(
        <div className="hitTarget">
            <img src={image}></img>
            <h3>{name}</h3>
        </div>
    )
}

export default HitTarget
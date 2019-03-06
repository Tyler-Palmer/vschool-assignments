import React from 'react'

const Photo = props => {
    const { title, imgUrl } = props
    return (
        <div className="photo">
            <h1>{title}</h1>
            <div 
                style={{ backgroundImage: `url(${imgUrl})`}}
                className="photo-img">
            </div>
        </div>
    )
}

export default Photo
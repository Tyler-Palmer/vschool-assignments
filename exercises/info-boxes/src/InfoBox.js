import React from 'react'

const InfoBox = (props) => {
    return(
        <div class="box" style={{backgroundColor:props.color}}>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="subtitle">
                <h3>{props.subtitle}</h3>
            </div>
            <div>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default InfoBox
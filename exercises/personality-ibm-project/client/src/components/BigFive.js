import React from 'react'
import '../results-details.css'
const toPercent = require('decimal-to-percent')
const math = require('mathjs')


const BigFive = (props) => {
    return (
        <div className="big-five">
            <h5>{props.name}</h5>
            <p>{toPercent(math.round(props.percentile, 3))}</p>
        </div>
    )
}

export default BigFive
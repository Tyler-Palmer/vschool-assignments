import React from 'react'
const toPercent = require('decimal-to-percent')
const math = require('mathjs')

const Values = props =>{
    return(
        <div>
        <h5>{props.name}</h5>
        <p>{toPercent(math.round(props.percentile, 3))}</p>
        </div>
    )
}

export default Values
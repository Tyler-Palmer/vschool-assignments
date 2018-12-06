import React from 'react'
import '../results-details.css'
import './needs.css'

const toPercent = require('decimal-to-percent')
const math = require('mathjs')


const Needs = props =>{
    return(
        <div className="needs">
        <h5>{props.name}</h5>
        <p>{toPercent(math.round(props.percentile, 3))}</p>
        </div>
    )
}

export default Needs
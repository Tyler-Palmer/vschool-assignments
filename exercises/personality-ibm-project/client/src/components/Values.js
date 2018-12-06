import React from 'react'
import '../results-details.css'
import { Progress } from 'reactstrap'
import './values.css'
const toPercent = require('decimal-to-percent')
const math = require('mathjs')


const Values = props => {
    return (
        <div className="values">
            <h5>{props.name}</h5>
            <div className="value-bar">{toPercent(math.round(props.percentile, 3))}</div>
            <Progress value={math.round((props.percentile * 100), 3)} />
            <hr></hr>
        </div>
    )
}

export default Values
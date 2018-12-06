import React from 'react'
import '../results-details.css'
import './needs.css'
import { Progress } from 'reactstrap'

const toPercent = require('decimal-to-percent')
const math = require('mathjs')


const Needs = props => {
    return (
        <div className="needs">
            <h5>{props.name}</h5>
            <div className="needs-bar">{toPercent(math.round(props.percentile, 3))}</div>
            <Progress value={math.round((props.percentile * 100), 3)} />
            <hr></hr>
        </div>
    )
}

export default Needs
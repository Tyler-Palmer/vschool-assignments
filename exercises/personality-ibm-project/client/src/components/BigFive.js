import React from 'react'
import '../results-details.css'
import './big-five.css'
import { Progress } from 'reactstrap'
const toPercent = require('decimal-to-percent')
const math = require('mathjs')


const BigFive = (props) => {

    return (
        <div className="big-five">
            <h5>{props.name}</h5>
            <div className="five-bar">{toPercent(math.round(props.percentile, 3))}</div>
            <Progress value={math.round((props.percentile * 100), 3)} />
            <hr></hr>

        </div>
    )
}

export default BigFive
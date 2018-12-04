import React, { Component } from 'react'
const toPercent = require('decimal-to-percent')
const math = require('mathjs')

class ResultsDetails extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
                <h6>{toPercent(math.round(this.props.percentile,4))}</h6>
            </div>
        )
    }
}

export default ResultsDetails
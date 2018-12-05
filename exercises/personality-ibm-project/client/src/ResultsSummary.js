import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import profile from './profile.json'

class ResultsSummary extends Component {
    render() {
        return (
            <div>
                <h3>Text Summary</h3>
                <p>{this.props.textSummary}</p>
            </div>
        )
    }
}

export default withResults(ResultsSummary)
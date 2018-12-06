import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import profile from './profile.json'
import './results-summary.css'

class ResultsSummary extends Component {
    render() {
        return (
            <div id="results-summary">{ this.props.textSummary &&
                <div>
                    <h3>Text Summary</h3>
                    <p>{this.props.textSummary}</p>
                </div>
            }
            </div>

        )
    }
}

export default withResults(ResultsSummary)
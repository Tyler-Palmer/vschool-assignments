import React, { Component } from 'react'
import { withResults } from '../context/ResultsProvider'
import './results-summary.css'

class ResultsSummary extends Component {
    render() {
        return (
            <div>
                {this.props.textSummary &&
                    <div id="results-summary">
                        <div>
                            <h3>Text Summary</h3>
                            <p>{this.props.textSummary}</p>
                        </div>

                    </div>
                }
            </div>
        
    
            )
        }
    }
    
export default withResults(ResultsSummary)
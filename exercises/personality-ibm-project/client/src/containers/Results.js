import React from 'react'
import { withResults } from '../context/ResultsProvider'
import ResultsDetails from './ResultsDetails'
import ResultsSummary from './ResultsSummary'
import './results.css'



const Results = (props) => {
    console.log(props)
    return (
        <div>
            <div id="results-box">
                <ResultsSummary />
                <ResultsDetails />
                {/* <Visualization /> */}
            </div>
        </div>
    )
}

export default withResults(Results)
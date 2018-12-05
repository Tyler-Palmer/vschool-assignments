import React from 'react'
import { withResults } from './context/ResultsProvider'
import ResultsDetails from './ResultsDetails'
import ResultsSummary from './ResultsSummary'
import Visualization from './Visualization'



const Results = (props) =>{
    console.log(props)
    return(
        <div id ="results-box">
            <ResultsSummary />
            <ResultsDetails />
            <Visualization />
        </div>
    )
}

export default withResults(Results)
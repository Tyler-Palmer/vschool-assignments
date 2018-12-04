import React from 'react'
import ResultsDetails from './ResultsDetails'
import { withResults } from './context/ResultsProvider'


const Results = (props) =>{
    console.log(props)
    return(
        <div>
            <ResultsDetails />
        </div>
    )
}

export default withResults(Results)
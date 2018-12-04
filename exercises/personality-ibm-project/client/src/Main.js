import React, { Component } from 'react'
import TextForm from './TextForm'
import Results from './Results'
import { withResults } from './context/ResultsProvider'

class Main extends Component {

    render() {
        return (
            <div>
                <TextForm />
                <Results />
            </div>
        )
    }
}

export default withResults(Main)
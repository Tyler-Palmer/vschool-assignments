import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import profile from './profile.json'
import BigFive from './components/BigFive'
import Needs from './components/Needs'
import Values from './components/Values'

class ResultsDetails extends Component {
    constructor() {
        super()
        // console.log(profile)
        // console.log(profile.personality)
    }

    render() {
        return (
            <div>
                <h3>Big Five Personality</h3>
                {
                    profile.personality.map((item, i) => <BigFive {...item} key={i} />)
                }
                <h3>Needs</h3>
                {
                    profile.needs.map((item, i) => <Needs {...item} key={i} />)
                }
                <h3>Values</h3>
                {
                    profile.values.map((item, i) => <Values {...item} key={i} />)
                }
            </div>
        )
    }
}

export default withResults(ResultsDetails)
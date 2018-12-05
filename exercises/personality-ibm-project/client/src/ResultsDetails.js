import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import profile from './profile.json'
import BigFive from './components/BigFive'
import Needs from './components/Needs'
import Values from './components/Values'

class ResultsDetails extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.responseData)
        return (
            <div>
                {this.props.responseData.hasOwnProperty("word_count") &&
                    <div>
                        <h3>Big Five Personality</h3>
                        {
                            this.props.responseData.personality.map((item, i) => <BigFive {...item} key={i} />)
                        }
                        <h3>Needs</h3>
                        {
                            this.props.responseData.needs.map((item, i) => <Needs {...item} key={i} />)
                        }
                        <h3>Values</h3>
                        {
                            this.props.responseData.values.map((item, i) => <Values {...item} key={i} />)
                        }
                    </div>
                }
            </div>

        )
    }
}

export default withResults(ResultsDetails)
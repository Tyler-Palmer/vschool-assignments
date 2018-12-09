import React, { Component } from 'react'
import { withResults } from '../context/ResultsProvider'
import BigFive from '../components/BigFive'
import Needs from '../components/Needs'
import Values from '../components/Values'
import './results-details.css'

class ResultsDetails extends Component {

    render() {
        console.log(this.props.responseData)
        return (
            <div id="detail-div">
                {this.props.responseData.hasOwnProperty("word_count") &&
                    <div id="results-details">
                        <div id="big-five-box">
                        <h3>Big Five Personality</h3>
                        {
                            this.props.responseData.personality.map((item, i) => <BigFive {...item} key={i} />)
                        }
                        </div>
                        <div id="needs-box">
                        <h3>Needs</h3>
                        {
                            this.props.responseData.needs.map((item, i) => <Needs {...item} key={i} />)
                        }
                        </div>
                        <div id="values-box">
                        <h3>Values</h3>
                        {
                            this.props.responseData.values.map((item, i) => <Values {...item} key={i} />)
                        }
                        </div>
                    </div>
                }
            </div>

        )
    }
}

export default withResults(ResultsDetails)
import React, { Component } from 'react'
import UglyThing from './UglyThing'
import { withUglyThings } from './UglyThingsProvider'
import UglyForm from './UglyForm'

class App extends Component {
    componentDidMount() {
        this.props.getUglyThings()
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Ugly Things Exercise</h1>
                    <UglyForm />
                </div>
                {
                    this.props.uglyThings.map((thing, i) => <UglyThing {...thing} key={i} />)
                }
            </div>
        )
    }
}

export default withUglyThings(App)
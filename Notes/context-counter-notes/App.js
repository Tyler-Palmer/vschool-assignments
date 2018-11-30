import React, { Component } from 'react'
import { withCount } from './CountProvider'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

        // Getting an initial count from a Database when the app first loads.
        // The Axios request is done in the context so it can update the context state
        // when the axios response comes back
    // componentDidMount(){
    //     this.props.getUserCount()
    // }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Takes the user input from this components state,
        // and sends it to the Count Context to have the count state updated
        this.props.changeCount(this.state.userInput)
        
        // clear user input
        this.setState({
            userInput: ''
        })
    }

    render(){
        return (
            <div>
  
                <h1>Count: {this.props.count}</h1>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
        // Using our Method from the CountProvider file that takes a Component as an 
        // argument and returns that component with the Context state added to it's `props object`
export default withCount(App)
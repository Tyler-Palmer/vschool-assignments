import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }
    
    componentDidMount(){
        // Get the data once the page has loaded and save it in state
        axios.get(`https://vschool-cors.herokuapp.com?url=https://swapi.co/api/people`).then(response => {
            this.setState({
                characters: response.data.results
            })
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                { this.state.characters.map(char => <h1>{char.name}</h1>)}
            </div>
        )
    }
}

export default App
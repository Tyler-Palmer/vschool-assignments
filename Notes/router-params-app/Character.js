import React, { Component } from 'react'
import axios from 'axios'

class Character extends Component {
    constructor(){
        super()
        this.state = {
            character: {},
            pageNum: 1
        }
    }

    componentDidMount(){
        // Grabs the variable from router match params object which will
        // have the ID of the character <Link> the user clicked on.
        const id = this.props.match.params.id
        axios.get(`http://vschool-cors.herokuapp.com?url=https://swapi.co/api/people/${id}`)
            .then(response => {
                this.setState({
                    character: response.data
                })
            })

    }

    // You could do this many ways, simply send the user back to home page
    // using react router's history.push() method.
    backToNameList = () => {
        this.props.history.push('/')
    }

    render(){
        const { character } = this.state
        return (
            <div className="character-container" style={{ color: character.eye_color}}>
                <button onClick={this.backToNameList}>Go Back</button>
                <h1>Name: {character.name}</h1>
            </div>
        )
    }
}

export default Character
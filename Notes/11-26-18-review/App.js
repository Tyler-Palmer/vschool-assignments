import React, { Component } from 'react'
import StarWarsForm from './StarWarsForm'
import Character from './Character'


class App extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            lightsaber: '',
            characters: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const newChar = {
            name: this.state.name,
            lightsaber: this.state.lightsaber
        }

        this.setState(prevState => {
            return {
                characters: [...prevState.characters, newChar],
                name: '',
                lightsaber: ''
            }
        })
    }

    render(){
        return (
            <div>
                <StarWarsForm 
                    name={this.state.name}
                    lightsaber={this.state.lightsaber}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <div>
                    { this.state.characters.map((char, i) => 
                        <Character 
                            key={char.name + i} 
                            name={char.name} 
                            lightsaber={char.lightsaber}/>) 
                    }
                </div>
            </div>
        )
    }

}

export default App
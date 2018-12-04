import React, { Component } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = React.createContext()


export default class CharacterProvider extends Component {
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    getData = () => {
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
                this.setState({
                    characters: res.data.results
                })
            })
            .catch(err => console.log(err))
    }
    
    render(){
        return (
            <Provider value={{
                characters: this.state.characters,
                getData: this.getData
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withCharacter = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)
import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

export default class VideoGameProvider extends Component {
    constructor(){
        super()
        this.state = {
            videoGames: [],
        }
    }

    // GET ALL
    getVideoGames = () => {
        axios.get('/video-games').then(response => {
            this.setState({ videoGames: response.data })
        })
    }

    // ADD ONE - POST
    addVideoGame = newGame => {
        axios.post('/video-games', newGame).then(response => {
            this.setState(prevState => { 
                return {
                    videoGames: [...prevState.videoGames, response.data]
                }
            })
        })
    }

    render(){
        return(
            <Provider 
                value={{
                    videoGames: this.state.videoGames,
                    getVideoGames: this.getVideoGames,
                    addVideoGame: this.addVideoGame
                }}>
                { this.props.children }
            </Provider>
        )
    }
}


export const withVideoGames = C => props => 
    <Consumer>
        {value => <C  {...props} {...value}/>}
    </Consumer>

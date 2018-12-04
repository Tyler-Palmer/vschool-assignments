import React from 'react'
import axios from 'axios'

export {Provider, Consumer } from React.createContext()

export default class ResultsProvider extends Component{
    constructor(){
        super()
        this.state = {
            profiles: []
        }
    }
    render(){
        return(
            <Provider value={{
                profiles: this.state.profiles
            }}>
            {
                this.props.children
            }
            </Provider>
        )
    }
}

export const withResults = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)
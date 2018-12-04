import React, { Component } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = React.createContext()

export default class ResultsProvider extends Component{
    constructor(){
        super()
        this.state = {
            content: '',
            wordCount: '0',
            responseData: {},
            profiles: []
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        axios.post("/results",{content: this.state.content}).then(response => {
            console.log(response)
            this.setState({
                responseData:response.data,
                content:''
            })
        })
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
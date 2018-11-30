import React, { Component } from 'react'
import axios from 'axios'

const { Consumer, Provider } = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglyThings: [],
            title: '',
            description: '',
            imgURL: ''
        }
    }

    getUglyThings = () => {
        axios.get('https://api.vschool.io/tyler/todo/').then(response =>{
            this.setState({
                uglyThings: response.data
            })
        })
    }

    // handleChange = e =>{
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = e =>{
    //     e.preventDefault()
    //     const newThing = {
    //         title: this.state.title,
    //         description: this.state.description,
    //         imgURL: this.state.imgURL
    //     }
    //     this.handleChange
    // }

    render(){
        return(
            <Provider value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.getUglyThings
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export default UglyThingsProvider

export const withUglyThings = C => props => (
    <Consumer>
        { value => <C {...props} {...value}/>}
    </Consumer>
)
import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInputs: props.userInputs
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                userInputs: {
                    ...prevState.userInputs,
                    [name]: value
                }
            }
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state.userInputs)
        this.setState({ userInputs: this.props.userInputs })
    }

    render(){
        return this.props.render({
                userInputs: this.state.userInputs,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange
        })
    }
}

export default Form








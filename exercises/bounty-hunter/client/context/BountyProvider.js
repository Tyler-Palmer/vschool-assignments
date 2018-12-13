import React, { Component } from 'react'

class BountyProvider extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({

        })
    }

    render(){
        <div>
            <Provider value = {{
                handleChange = this.handleChange,
                handleSubmit = this.handleSubmit
            }}>
                { this.props.children }
            </Provider>
        </div>
    }
}

export const withBountyProvider = C => props => {
    <Consumer>
        {value => <C {...props} {...value} />}
    </Consumer>
}
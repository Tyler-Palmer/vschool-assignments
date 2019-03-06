import React, { Component } from 'react'
import LoginForm from './LoginForm'

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
            user: {
                username: '',
                password: '',
            }
        }
    }

    handleChange = e => {
        // deconstruct `name` and `value` from e.target
        const {name, value} = e.target
        // Rather than declaring them separately
            // const name = e.target.name
            // const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password
        }
       
        this.setState({
            user: newUser,
            isAuthenticated: true,
            username: '',
            password: '',
        })
    }

    render() {
        // Grab username from state to dynamically render different background color
        const { username } = this.state.user
        
        // Does the username exist? If so check to see if it starts with 'r'
        let styleObj = {}
        if (username[0] && username[0].toLowerCase() === "r") {
            styleObj.backgroundColor = "red"
        } else if(username[0] && username[0].toLowerCase() === "b"){
            styleObj.backgroundColor = "blue"
        }

        return (
            <div>
                {this.state.isAuthenticated
                    ?
                    <h1 style={styleObj}>Hello {this.state.user.username}</h1>
                    :
                    <LoginForm
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}

export default App
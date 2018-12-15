import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

export default class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: []
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

    //Get All

    getBounties = () => {
        axios.get('/bounties').then(response => {
            this.setState({
                bounties: response.data
            })
        }).catch(err => console.log(err))

    }

    addOneBounty = (newBounty) => {
        axios.post('/bounties', newBounty).then(response => {
            this.setState(prevState => {
                return {
                    bounties: [response.data, ...prevState.bounties]
                }
            })
        })
    }

    render() {
        return (
            <div>
                <BountyContext.Provider value={{
                    bounties: this.state.bounties,
                    getBounties: this.getBounties,
                    addOneBounty: this.addOneBounty
                }}>
                    {this.props.children}
                </BountyContext.Provider>
            </div>
        )
    }
}

export const withBountyProvider = C => props => {           //normally can just use () as the return is implied
    return (
        <BountyContext.Consumer>
            {(value) => <C {...props} {...value} />}
        </BountyContext.Consumer>
    )
}
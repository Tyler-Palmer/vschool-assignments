import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

export default class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: [],
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bountyAmount: this.state.bountyAmount
        }
        axios.post('/bounties', newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [response.data, ...prevState.bounties],
                firstName: "",
                lastName: "",
                type: "",
                bountyAmount:""
            }))
        
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

    render() {
        return (
            <div>
                <BountyContext.Provider value={{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    type:this.state.type,
                    bountyAmount:this.state.bountyAmount,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    bounties: this.state.bounties,
                    getBounties: this.getBounties,
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
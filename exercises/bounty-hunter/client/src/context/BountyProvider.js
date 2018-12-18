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

    //Post

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
                bountyAmount: ""
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

    //Delete

    handleDelete = id => {
        axios.delete('/bounties/:id').then(response => {
            this.setState(prevState => {
                return {
                    bounties: prevState.bounties.filter(bounty => bounty._id !== id)
                }
            })
        })
    }

    //Put


    handleEdit = (id, updates) => {
        console.log(id)
        console.log(updates)
        const editedBounty = 
        axios.put('/bounties/:id', editedBounty).then(response => {
            console.log(response)
            this.setState(prevState => {
                return{
                    bounties: prevState.bounties.map(bounty => bounty._id === id ? response.data : bounty )
                }
            })
        })
    }

    render() {
        return (
            <div>
                <BountyContext.Provider value={{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    type: this.state.type,
                    bountyAmount: this.state.bountyAmount,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit,
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
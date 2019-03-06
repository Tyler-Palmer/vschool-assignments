import React, { Component, Fragment } from 'react'


class Bounty extends Component {
    constructor() {
        super()
        this.state = {
            editing: false,
            firstName: '',
            lastName: '',
            type: '',
            bountyAmount: ''
        }
    }

    editToggler = () => {
        this.setState(prevState => {
            return {
                editing: !prevState.editing
            }
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const editedBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            bountyAmount: this.state.bountyAmount
        }
    }

    render() {
        return (
            <div>
                <Fragment>
                    {this.state.editing ?

                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    name="firstName" />
                                <input type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    name="lastName" />
                                <input type="text"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                    placeholder="Jedi or Sith?"
                                    name="type" />
                                <input type="text"
                                    value={this.state.bountyAmount}
                                    onChange={this.handleChange}
                                    placeholder="$ Bounty Amount"
                                    name="bountyAmount" />
                                <button onClick={this.editToggler}>Close</button>
                                <button>Submit Edit</button>
                            </form>
                        </div>


                        :
                        <div>
                            <h1>Bounty</h1>
                            <h2>{this.props.firstName}</h2>
                            <h2>{this.props.lastName}</h2>
                            <h3>{this.props.type}</h3>
                            <h3>{this.props.bountyAmount}</h3>
                            <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                            <button onClick={this.editToggler}>Edit</button>
                        </div>
                    }
                </Fragment>
            </div>
        )
    }
}

export default Bounty
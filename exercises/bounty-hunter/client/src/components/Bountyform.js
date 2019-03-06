import React, { Component } from 'react'
import { withBountyProvider } from '../context/BountyProvider'

class BountyForm extends Component {

    render() {
        return (
            <div id="Post-Form">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text"
                        value={this.props.firstName}
                        name="firstName"
                        placeholder="First name"
                        onChange={this.props.handleChange} />
                    <input type="text"
                        value={this.props.lastName}
                        name="lastName"
                        placeholder="Last name"
                        onChange={this.props.handleChange} />
                    <input type="text"
                        value={this.props.type}
                        name="type"
                        placeholder="Jedi or Sith?"
                        onChange={this.props.handleChange} />
                    <input type="number"
                        value={this.props.bountyAmount}
                        name="bountyAmount"
                        placeholder="What's the bounty ($)?"
                        onChange={this.props.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withBountyProvider(BountyForm)
import React, { Component } from 'react'
import Bounty from './Bounty'
import { withBountyProvider } from '../context/BountyProvider'
class Bounties extends Component {
    componentDidMount(){
        this.props.getBounties()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.bounties.map(bounty => 
                        <Bounty firstName = {bounty.firstName}
                                lastName = {bounty.lastName}
                                type = {bounty.type}
                                bountyAmount = {bounty.bountyAmount}
                                key = {bounty._id}/>
                    )
                }
            </div>
        )
    }
}

export default withBountyProvider(Bounties)
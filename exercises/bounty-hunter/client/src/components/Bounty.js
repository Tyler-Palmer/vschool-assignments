import React from 'react'

const Bounty = (props) => {
    const { firstName, lastName, type, bountyAmount} = props
    return(
        <div>
            <h1>Bounty</h1>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <h3>{type}</h3>
            <h3>{bountyAmount}</h3>
        </div>
    )
}

export default Bounty
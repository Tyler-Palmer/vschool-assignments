import React from 'react'

const Badge = props => {
    let {firstName, lastName, email, pob, phone, favFood, about} = props
    return(
        <div id="badgeContainer">
            <div id="banner"><h1>Badge</h1></div>
            <h3 className="column1">Name: {firstName} {lastName}</h3>
            <h3 className="column1">Place of birth: {pob}</h3>
            <h3 className="column1">Email: {email}</h3>
            <h3 className="column2">Phone: {phone}</h3>
            <h3 className="column2">Favorite Food: {favFood}</h3>
            <div id="aboutBadge" className="row5">{about}</div>
        </div>
    )
}

export default Badge
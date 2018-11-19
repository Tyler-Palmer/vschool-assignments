import React from 'react'
import Friend from './Friend'
import propTypes from 'prop-types'
const Person = (props) => {

    const mappedFriends = props.friends.map((name, i) => <Friend key={name +i} name={name} />)
    console.log(mappedFriends)
    return(
        <div className="person-container">
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            Friends: {mappedFriends}
        </div>
    )
}

Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    friends: propTypes.arrayOf(propTypes.string)
}

export default Person
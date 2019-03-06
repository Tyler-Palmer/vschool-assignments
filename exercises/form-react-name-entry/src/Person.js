import React from 'react'

const Person = (props) => {
    const {fName, lName, age, color} = props
    return(
        <li>Name: {fName} {lName}, Age: {age}, Favorite Color: {color}</li>
    )
}




export default Person
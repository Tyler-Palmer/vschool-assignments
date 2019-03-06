import React from 'react'
import people from './data.json'
import Person from './Person'

const App = () => {
    return(
        <div>
            {
            people.data.map(person =>
                <Person name = {person.name}
                        age = {person.age}
                        friends = {person.friends}
                        key= {person.id}/>)
            }
        </div>
    )
}

export default App
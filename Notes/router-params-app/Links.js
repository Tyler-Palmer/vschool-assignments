import React from 'react'
import { Link } from 'react-router-dom'

const Links = props => {
    const { people, page, prevPage, nextPage } = props

    // Check the url length, if it's 30, the user's id is a single digit
    // so we just sliced off the last 2 letters of the string
    // If the url lenghth is greater, then we slice off the last 3 as the
    // person's id would be double digits
    const mappedLinks = people.map(person => {
            if(person.url.length === 30){
               return  <Link to={`/${person.url.slice(-2)}`}>{person.name}</Link>
            } else {
               return  <Link to={`/${person.url.slice(-3)}`}>{person.name}</Link>
            }
        }
    )

    return (
        <div>
            {/* All character Links */}
            <div className="links-container">
                { mappedLinks }
            </div>

            {/* Page buttons */}
            <div className="page-btns">
                { page > 1 && <button onClick={prevPage}>Prev</button> }
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default Links
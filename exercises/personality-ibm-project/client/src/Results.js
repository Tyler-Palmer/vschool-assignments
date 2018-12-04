import React from 'react'
import ResultsDetails from './ResultsDetails'
import profile from './profile.json'

const Results = () =>{
console.log(profile.personality)
console.log(profile.personality[0].name)
    return(
        <div>
            {
                profile.personality.map((item, i) => <ResultsDetails {...item} key={i} />)
            }
            
        </div>
    )
}

export default Results
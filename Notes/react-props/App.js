import React from 'react'
// import Welcome from './Welcome'
// import Profile from './Profile'
import Comment from './Comment'

const App = () => {
    return (
        <div id='App'>
            <Comment comment='Hi this is a comment' 
                     date='Feb 1, 2019' 
                     user={{name: 'bob', pic: "https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg"}} />
        </div>
    )
}

export default App;
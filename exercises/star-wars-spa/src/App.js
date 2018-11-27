import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Sidebar from './Sidebar'

class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Sidebar />
            </div>
        )
    }
}

export default App
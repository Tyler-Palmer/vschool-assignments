import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

const Sidebar = (props) =>{
    return(
        <div>
            <Link to = '/'>Home</Link>
        </div>
    )
}

export default Sidebar
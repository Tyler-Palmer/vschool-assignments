import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

const Navbar = () =>{
    return(
        <div className ="nav">
            <div className="icon"></div>
            <Link to ='/'>Home</Link>
            <Link to ='/about'>About</Link>
        </div>
    )
}

export default Navbar
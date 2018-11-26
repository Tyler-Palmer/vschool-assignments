import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'

const Navbar = props =>{
    return(
        <div className ="nav">
        <div className="icon"></div>
            <Link to ='/'>Home</Link>
            <Link to ='/about'>About</Link>
            <Link to ='/services'>Services</Link>
        </div>
    )
}

export default Navbar
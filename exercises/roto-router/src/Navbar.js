import React from 'react'
import {Link} from 'react-router-dom'

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
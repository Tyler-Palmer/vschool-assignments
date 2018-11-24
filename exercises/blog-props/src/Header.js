import React from 'react'
import Navbar from './Navbar'

const Header = () =>{
    return(
        <div>
            <Navbar />
            <div className="site-heading">
                <h1>Clean Blog</h1>
                <span>A Blog Theme by Start Bootstrap</span>
            </div>
        </div>
    )
}

export default Header
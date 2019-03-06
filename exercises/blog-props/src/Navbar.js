import React from 'react'

const Navbar = (props) => {
    const {background, fixed, color} = props
    return(
        <div className="navbar" style = {{background: background, position: fixed}} >
            <h3><a style = {{color:color}} href="#">Start Bootstrap</a></h3>
            <ul>
                <li><a style = {{color:color}} href="#">HOME</a></li>
                <li><a style = {{color:color}} href="#">ABOUT</a></li>
                <li><a style = {{color:color}} href="#">SAMPLE POST</a></li>
                <li><a style = {{color:color}} href="#">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Navbar
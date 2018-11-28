import React from 'react'
import { withTheme } from './ThemeProvider'

const Home = (props) =>{
    return(
        <div className="home" className={`${props.theme}`}>
            <h1>Changing Themes Using Context</h1>
            <h3>More text to fill space</h3>
            <h4>Blah blah blah blah blah</h4>
            <h5>Blah blah blah blah</h5>
            <button onClick={props.toggleTheme}>{props.theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}</button>
        </div>
    )
}

export default withTheme(Home)
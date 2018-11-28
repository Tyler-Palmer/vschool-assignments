import React from 'react'
import { withTheme } from './ThemeProvider'

const About = (props) => {
    return (
        <div className="about" className={`${props.theme}`}>
            <h1>About about about about</h1>
            <h1>Changing Themes Using Context</h1>
            <h3>More text to fill space</h3>
            <h4>Blah blah blah blah blah</h4>
            <h5>Blah blah blah blah</h5>
            <button onClick={withTheme}>{props.theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}</button>
        </div>
    )
}

export default withTheme(About)
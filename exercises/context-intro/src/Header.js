import React from 'react'
import { withTheme } from './ThemeProvider'

const Header = props => {
    return (
        <div className={`${props.theme}-header`}>
            <h1>My context Header</h1>
            <button onClick={props.toggleTheme}>{props.theme === 'dark' ? "Switch to Light" : "Switch to Dark"}</button>
        </div>

    )
}
export default withTheme(Header)
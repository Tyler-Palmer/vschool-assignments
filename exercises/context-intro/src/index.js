import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import ThemeProvider from './ThemeProvider'


ReactDOM.render(<ThemeProvider value={ {theme: "dark"} }>
                    <App />
                </ThemeProvider>, document.getElementById('root'))
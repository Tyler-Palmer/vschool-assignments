import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CountProvider from './CountProvider'


ReactDOM.render(
    <CountProvider>
        <App />
    </CountProvider>, 
document.getElementById('root'))
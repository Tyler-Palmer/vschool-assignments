import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UglyThingsProvider from './UglyThingsProvider'

ReactDOM.render(
    <UglyThingsProvider>
        <App />
    </UglyThingsProvider>, 
document.getElementById('root'))
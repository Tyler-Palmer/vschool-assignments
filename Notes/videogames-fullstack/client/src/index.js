import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import VideoGameProvider from './context/VideoGameProvider'


ReactDOM.render(
    <VideoGameProvider>
        <App />
    </VideoGameProvider>, 
document.getElementById('root'))
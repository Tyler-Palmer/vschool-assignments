import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PhotoProvider from './context/PhotoProvider'
import App from './App'
import './style.css'

ReactDOM.render(
    <BrowserRouter>
        <PhotoProvider>
            <App/>
        </PhotoProvider>
    </BrowserRouter>, 
document.getElementById('root'))
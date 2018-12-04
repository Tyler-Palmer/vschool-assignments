import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '../node_modules/bootswatch/dist/lumen/bootstrap.min.css'
import './style.css'

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>,document.getElementById('root'))
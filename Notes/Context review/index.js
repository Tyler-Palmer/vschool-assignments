import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CharacterProvider from './context/CharacterProvider'
import App from './App'


ReactDOM.render(
    <BrowserRouter>
        <CharacterProvider>
            <App />
        </CharacterProvider>
    </BrowserRouter>, 
document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


export const {Provider, Consumer} = REact.createContext()

ReactDOM.render(<Provider value={ {theme: "dark"} }>
                    <App />
                </Provider>, document.getElementById('root'))
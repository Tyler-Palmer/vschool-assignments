import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BountyProvider from './context/BountyProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                    <BountyProvider>
                        <App />
                    </BountyProvider>
                </BrowserRouter>, document.getElementById('root'));


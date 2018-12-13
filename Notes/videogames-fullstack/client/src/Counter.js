import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

// THESE ARE HOOKS, COME BACK LATER//
// If you want to use them, you must install the newest version
// of react and react-dom.  do this by `npm i react@next react-dom@next`

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [videoGames, setVideoGames] = useState([])

    useEffect(() => {
        axios.get('/video-games').then(response => {
            setVideoGames(response.data)
        })
    })

    return (
        <div>
            { videoGames.map(game => <h1>{game.title}</h1>)}
            <h1>{toggle ? "I AM toggled" : "I am NOT toggled"}</h1>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            <button onClick={() => setCounter(counter - 1)}> - </button>
            <button onClick={() => setCounter(counter / 2)}> /2 </button>
            <button onClick={() => setCounter(counter * 3)}> *2 </button>
        </div>
    )
}

export default Counter;
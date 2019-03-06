import React, { Component } from 'react'
import Person from './Person'
import './style.css'

class App extends Component {
    constructor(){
        super()
        // this.intervalId = ""
        this.state = {
            color: ''
        }
    }

    componentDidMount(){
        // axios
        window.addEventListener("keypress", (e) => {
            if(e.code === "KeyB"){
                this.setState({
                    color: "blue"
                })
            }
        })
        // this.intervalId = setInterval(this.incrementCounter, 1000)
    }

    componentWillUnmount(){
        window.removeEventListener('keypress')
        // clearInterval(this.intervalId)
    }

    
    render(){
        return (
            <div>
                <Person color={this.state.color}/>
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'

// Because we took state out of this an App.js, we could turn
// them both into functional components.

class ColorBox extends Component {
    render(){
        return (
            <div style={{ 
                backgroundColor: this.props.isToggled ? "black" : "blue",
                height: 200,
                width: 200 }}>
                <button onClick={this.props.toggler}>Change me</button>
            </div>
        )
    }
}

export default ColorBox
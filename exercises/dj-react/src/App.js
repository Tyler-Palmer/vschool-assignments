import React, { Component } from 'react';
import Square from './Square'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        button1status: false,
        button2status: false,
        button3status: false,
        button4status: false
    }
  }

  toggle1 = () => {
    const currentState = this.state.button1status
    this.setState({button1status: !currentState})
        if(this.state.button2status !== false){
            this.setState({button2status: !this.state.button2status})
        }
        if(this.state.button3status !== false){
            this.setState({button3status: !this.state.button3status})
        }
        if(this.state.button4status !== false){
          this.setState({button4status: !this.state.button4status})
        }
  }

  toggle2 = () => {
    const currentState = this.state.button2status
    this.setState({button2status: !currentState})
  }

  toggle3 = () => {
    const currentState = this.state.button3status
    this.setState({button3status: !currentState})
  }

  toggle4 = () => {
    const currentState = this.state.button4status
    this.setState({button4status: !currentState})
  }

  render() {
    return (
      <div id="app">
          <div id ="controlButtonBox">
              <div id="button1" onClick={this.toggle1}></div>
              <div id="button2" onClick={this.toggle2}></div>
              <div id="button3" onClick={this.toggle3}>BL</div>
              <div id="button4" onClick={this.toggle4}>BR</div>
          </div>
          <div id="container">
            <Square button1 = {this.state.button1status}
                    backColor
                    button2 = {this.state.button2status} />

            <Square button1 = {this.state.button1status}
                    backColor
                    button2 = {this.state.button2status} />

            <Square button1 = {this.state.button1status}
                    backColor 
                    button3 = {this.state.button3status} />

            <Square button1 = {this.state.button1status}
                    backColor
                    button4 = {this.state.button4status} />
          </div>
          
      </div>
    );
  }
}

export default App;

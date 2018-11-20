import React, { Component } from 'react';
import Square from './Square'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        button1Class: false
    }
  }

  toggleClass1 = () => {
    const currentState = this.state.button1Class
    this.setState({ button1Class: !currentState})
  }

  render() {
    return (
      <div id="app">
          <div id ="controlButtonBox">
              <div id="button1" onClick={this.toggleClass1}>

              </div>
          </div>
          <div id="container">
            <Square button1 = {this.state.button1Class}
                    backColor />
            <Square button1 = {this.state.button1Class}
                    backColor />
            <Square />
            <Square />
          </div>
          
      </div>
    );
  }
}

export default App;

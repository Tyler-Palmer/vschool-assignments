import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter +1
      }
    })
  }

  subOne = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter -1
      }
    })
  }

  mulTwo = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter *2
      }
    })
  }

  divTwo = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter /2
      }
    })
  }

  render() {
    return (
      <div>
        <h1>React Math Counter Practice</h1>
        <br></br>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addOne}>+</button>
        <button onClick={this.subOne}>-</button>
        <button onClick={this.mulTwo}>* 2</button>
        <button onClick={this.divTwo}>/ 2</button>
      </div>
    );
  }
}

export default App;

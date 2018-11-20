import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state ={
      fName: '',
      lName: '',
      age: '',
      color: ''
    }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`A name was submitted: ${this.state.fName} ${this.state.lName}, they are ${this.state.age} years old and ${this.state.color} is their favorite color.`)
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                      placeholder="First Name"
                      onChange={this.handleChange}
                      value={this.state.fName}
                      name="fName" />
              <input type="text"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                      value={this.state.lName}
                      name="lName"/>
              <input type="number"
                      placeholder="Age"
                      onChange={this.handleChange}
                      value={this.state.age}
                      name="age"/>
              <input type="text"
                      placeholder="Fav Color"
                      onChange={this.handleChange}
                      value={this.state.color}
                      name="color"/>
              <button>Submit</button>
          </form>
        
      </div>
    );
  }
}

export default App;

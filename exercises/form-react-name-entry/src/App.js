import React, { Component } from 'react';
import Person from './Person'
class App extends Component {
  constructor(){
    super()

    this.state ={
      fName: '',
      lName: '',
      age: '',
      color: '',
      people: []
    }
  }
  handleChange = event => {
    let {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newPerson ={
        fName: this.state.fName,
        lName: this.state.lName,
        age: this.state.age,
        color: this.state.color

    }
    this.setState(prevState => {
      return {
        people: [...prevState.people, newPerson]
      }
    }, () => {
      console.log(this.state.people)
    })
  }

  render() {
    return (
      <div>
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
          <h1>People</h1>
          <ol>
          {
            this.state.people.map(person =>
              <Person fName={person.fName}
                      lName={person.lName}
                      age={person.age}
                      color={person.color}/>
            
            )}
          </ol>
      </div>
    );
  }
}

export default App;

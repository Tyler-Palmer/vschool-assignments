import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()

    this.state = {
      fName: '',
      lName: '',
      age: '',
      people: []
    }
  }

  handleChange = event => {
    let {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newPerson = {
      fName: this.state.fName,
      lName: this.state.lName,
      age: this.state.age
    }
    this.setState(prevState => {
      return {
        people: [...prevState.people, newPerson]
      }
    },()=> {
      console.log(this.state.people)
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
               placeholder='First Name' 
               onChange={this.handleChange}
               value={this.state.fName}
               name='fName' />
        <input type="text" 
               placeholder='Last Name'
               onChange={this.handleChange}
               value={this.state.lName}
               name='lName' />
        <input type='number'
                placeholder='age'
                onChange={this.handleChange}
                value={this.state.age}
                name='age'/>
        <button>Submit</button>
      </form>
    )
  }
}

export default App
import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            favHero: '',
            isAlive: false,
            alignment: '',
            allHeros: []
        }
    }

    handleChange = event => {
        const name = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newHero = {
            name: this.state.favHero,
            isAlive: this.state.isAlive,
            alignment: this.state.alignment
        }
        this.setState(prevState => {
            return {
                allHeros: [...prevState.allHeros, newHero],
                favHero: '',
                isAlive: false,
                alignment: '',
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Hero Name:
                        <select name="favHero" value={this.state.favHero} onChange={this.handleChange}>
                            <option value="batman">batman</option>
                            <option value="superman">superman</option>
                            <option value="ironman">ironman</option>
                            <option value="wonderwoman">wonderwoman</option>
                            <option value="flash">flash</option>
                        </select>
                    </label>
                    <label>Is Alive:
                        <input type="checkbox" name="isAlive" checked={this.state.isAlive} onChange={this.handleChange}/>
                    </label>
                    <label>Alignment:
                        Good:    <input type="radio" name="alignment" value="Good" onChange={this.handleChange}/>
                        Evil:    <input type="radio" name="alignment" value="Evil" onChange={this.handleChange}/>
                        Unknown: <input type="radio" name="alignment" value="Unknown" onChange={this.handleChange}/>
                    </label>
                    <button>Submit</button>
                </form>
                <div>
                    {/*  Map out all heroes */}
                </div>
            </div>
        )
    }
}

export default App
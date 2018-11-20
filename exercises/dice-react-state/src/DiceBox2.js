import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component{

    constructor(){
        super()
        this.state = {
            counter1 : 0,
            counter2 : 0,
            counter3 : 0,
            counter4 : 0,
            counter5 : 0,
        }
    }

    rollDice = () => {
        let randNum = () =>{
            return (Math.floor(Math.random()*6)+1)
        }
        this.setState(prevState => {
            return {
                counter1 : prevState.counter1 - prevState.counter1,
                counter2 : prevState.counter2 - prevState.counter2,
                counter3 : prevState.counter3 - prevState.counter3,
                counter4 : prevState.counter4 - prevState.counter4,
                counter5 : prevState.counter5 - prevState.counter5,
            }
        })

        this.setState(prevState => {
            return {
            counter1 : prevState.counter1 + randNum(),
            counter2 : prevState.counter2 + randNum(),
            counter3 : prevState.counter3 + randNum(),
            counter4 : prevState.counter4 + randNum(),
            counter5 : prevState.counter5 + randNum()
        }
    })
}
    render(){
        return(
            <div>
                <h1>{this.state.counter1}</h1>
                <h1>{this.state.counter2}</h1>
                <h1>{this.state.counter3}</h1>
                <h1>{this.state.counter4}</h1>
                <h1>{this.state.counter5}</h1>
                <button onClick={this.rollDice}>Roll The Dice</button>
            </div>
        )
    }
}


export default DiceBox
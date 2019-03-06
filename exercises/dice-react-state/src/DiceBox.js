import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component{

    constructor(){
        super()
        this.state = {
            die1 : 0,
            die2 : 0,
            die3 : 0,
            die4 : 0,
            die5 : 0,
        }
    }

    rollDice = () => {
        let randNum = () =>{
            return (Math.floor(Math.random()*6)+1)
        }

        //reset die value
        this.setState(prevState => {
            return {
                die1 : prevState.die1 - prevState.die1,
                die2 : prevState.die2 - prevState.die2,
                die3 : prevState.die3 - prevState.die3,
                die4 : prevState.die4 - prevState.die4,
                die5 : prevState.die5 - prevState.die5,
            }
        })
        //assign die value
        this.setState(prevState => {
            return {
            die1 : prevState.die1 + randNum(),
            die2 : prevState.die2 + randNum(),
            die3 : prevState.die3 + randNum(),
            die4 : prevState.die4 + randNum(),
            die5 : prevState.die5 + randNum()
        }
    })
}
    render(){
        return(
            <div>
                <Die roll = {this.state.die1} />
                <Die roll = {this.state.die2} />
                <Die roll = {this.state.die3} />
                <Die roll = {this.state.die4} />
                <Die roll = {this.state.die5} />
                <button onClick={this.rollDice}>Roll The Dice</button>
            </div>
        )
    }
}


export default DiceBox
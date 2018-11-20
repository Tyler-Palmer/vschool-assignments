import React, {Component} from 'react'

class Die extends Component{
    
    constructor(props){
        super()
        this.state = {
            rollCount : 0,
            counter2 : props.roll
            // selected Boolean
        }
    }
    
    dieHold = () =>{
        this.setState(prevState => {
            if (prevState.counter1 < 3){
                return {
                    rollCount: prevState.counter1 + 1,
                    counter2: prevState.counter2
                }
            }else{
                return{
                    rollCount: prevState.counter1 = 0,
                    counter2: prevState.counter2
                }
            }
        })
    }
    render(){
        // if this.state.bool ?
        return(
            <div onClick={this.dieHold}>
                <h2>{this.props.roll}</h2>
            </div>
        )
    }
}

export default Die
import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()


class CountProvider extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    // This would be where you get you initial state data.
    // This function would be called in something like <App /> in it's `componentDidMount`
    // getUserCount = () => {
    //     axios.get().then(res => {
    //         this.setState({
    //             count: res.data
    //         })
    //     })
    // }

    increment = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    changeCount = userInput => {
        this.setState({
            count: userInput
        })
    }    

    render(){
        return (
            <Provider
                value={{
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement,
                    changeCount: this.changeCount
                }}>
                { this.props.children }
            </Provider>
        )
    }
}


export const withCount = C => props => (
    <Consumer>
        {value =>  <C {...value} {...props}/>}
    </Consumer>
)


export default CountProvider
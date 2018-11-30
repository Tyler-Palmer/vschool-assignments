import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class UglyThingsProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglyThings: []
        }
    }

    getUglyThings = () => {
    //    axios.get('').then(response => {
    //        this.setState({
    //            uglyThings: response.data
    //        })
    //    })
    }

    render(){
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                getUglyThings: this.getUglyThings
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export default UglyThingsProvider

export const withUglyThings = C => props => (
    <Consumer>
        { value => <C {...props} {...value}/>}
    </Consumer>
)
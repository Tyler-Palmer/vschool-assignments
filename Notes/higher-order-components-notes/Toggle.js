import React, { Component } from 'react'

// Higher Order Component
    // Take a Component as an argument 
        // and/or
    // Return a new (updated) Component when it's done

    // This Toggle component is expecting a props.component, so if you were
    // going to use the Toggle as a Tag, you would have to write it like this:
        // <Toggle component={MyComponent}/>
    
    // Toggle then takes that component, and returns it with the Toggles function
    // and state

class Toggle extends Component {
    constructor(){
        super()
        this.state = {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    render(){
        // Render is the only place you can declare variables
        // and/or deconstruct props in class component
        // Here we grab the component, and other props (if any), and return
        // that component with the toggler method and a reference to the state.
        const { component, ...props } = this.props
        const C = component

        return (
           <C toggler={this.toggler} isToggled={this.state.isToggled}/>
        )
    }
}


// If you are not using the <Toggle component={MyComponent}/> , you can
// make a method like this you can use on the export default of a component,
// and that provides the isToggled and toggler items as props just like
// we would do with Context
    // Ex:  export default withToggle(App)
        // App now has a props.isToggled, and a props.toggler
export const withToggle = C => props => <Toggle component={C} {...props}/>

export default Toggle
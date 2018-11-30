import React, { Component } from 'react'
import ColorBox from './ColorBox'
import { withToggle } from './Toggle'
import Toggle from './Toggle'

// This component is using the withToggle method to have the isToggle and
// toggler automatically added to it's props.  Down on line 23 we are using 
// the <Toggle /> component and passing it the Component prop manually
// so that <ColorBox /> has a props.isToggled and a props.toggler

class App extends Component {
    render(){
        return (
            <div>
                <h1>
                    { this.props.isToggled ? "On" : "Off" }
                </h1>

                <button onClick={this.props.toggler}>
                    { this.props.isToggled ? "Off" : "On"}
                </button>

                <Toggle component={ColorBox} moreProps={"more props"}/>
             
            </div>
        )
    }
}


export default withToggle(App)
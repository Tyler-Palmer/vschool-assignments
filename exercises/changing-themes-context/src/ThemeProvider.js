import React from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            theme: "dark"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "dark" ? "light" : "dark"
            }
        })
    }

    render(){
        return(
            <div>
                <Provider value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme
                }}>
                    { this.props.children }
                </Provider>

            </div>
        )
    }
}

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

export default ThemeProvider
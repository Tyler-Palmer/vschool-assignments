import React from 'react'
import Navbar from './Navbar'

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            fixed: "",
            background: "",
            color: ""
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll)
    }
    componentWillUnmount(){
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () =>{
        console.log(window.scrollY)
        if(window.scrollY > 10){
            this.setState({
                fixed: "fixed",
                background: "rgba(255,255,255,0.7)",
                color: "black"
            })
        } else {
            this.setState({
                fixed:"",
                background: "",
                color: ""
            })
        }
    }

    render() {
        return (
            <div className="header">
                <Navbar fixed = {this.state.fixed}
                        background = {this.state.background}
                        color = {this.state.color} />
                <div className="site-heading">
                    <h1>Clean Blog</h1>
                    <span>A Blog Theme by Start Bootstrap</span>
                </div>
            </div>
        )
    }
}
export default Header
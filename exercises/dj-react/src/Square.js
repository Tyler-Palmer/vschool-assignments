import React from 'react'

const Square = (props) => {
    let {button1, button2, button3, button4, backColor} = props
    console.log(button1)
    console.log(button2)
    switch(button1){
        case true:
            backColor = 'white'
            break;
        case false:
            backColor = 'black'
            break;
        default:
            break;
    }
    switch(button2){
        case true:
            backColor = 'purple'
            break;
        case false:
            backColor = backColor
            break;
        default:
            break;
    }

    switch(button3){
        case true:
            backColor = 'blue'
            break;
        case false:
            backColor = backColor
            break;
        default:
            break;
    }

    switch(button4){
        case true:
            backColor = 'blue'
            break;
        case false:
            backColor = backColor;
            break;
        default:
            break;
    }

    return(
        <div className ="colorSquare" style={{backgroundColor: backColor}}>
        </div>
    )
}


export default Square
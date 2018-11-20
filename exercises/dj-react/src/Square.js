import React from 'react'

const Square = (props) => {
    let {button1, backColor} = props
    console.log(button1)
    switch(button1){
        case 'true':
            backColor = 'white'
            break;
        case 'false':
            backColor = 'black'
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
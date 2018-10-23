//on hover
var square = document.getElementById('square')

square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'blue'
})

//mousedown

square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'red'
})

//mouseletgo

square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'yellow'
})

//doubleclick

square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'green'
})

//scroll

window.addEventListener('scroll', function(){
    square.style.backgroundColor = 'orange'
})

//Keydowns

var keyRegister = function(){
    document.addEventListener('keydown', function(event) {
        console.log(event.which);
        if(event.which === 66){
            square.style.backgroundColor = 'blue'
    }else if(event.which === 82){
        square.style.backgroundColor = 'red'
    }else if(event.which === 89){
        square.style.backgroundColor = 'yellow'
    }else if(event.which === 71){
        square.style.backgroundColor = 'green'
    }else if(event.which === 79){
        square.style.backgroundColor = 'orange'
    }else{
        square.style.backgroundColor = 'black'
        }
      })
}
keyRegister();

function randomNum1(){
    var rand = Math.floor(Math.random()*100)
    if (rand <= 25){
        return "attacked"
    } else{
        return "safe"
    }
}

console.log(randomNum1())
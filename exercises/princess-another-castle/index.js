const poweredUp = {
    name: "Powered Up",
}
const big = {
    name: "Big",
}
const small = {
    name: "Small",
}
const dead = {
    name: "Dead",
}

class Player {
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = [poweredUp.name, big.name, small.name, dead.name]
        this.statusIndex = 0;
        this.hasStar = false;
        this.gameActive = true;
    }
    setName(namePicked){
        if(namePicked === "Mario"){
            this.name = "Mario"
        }else if (namePicked === "Luigi"){
            this.name = "Luigi"
        }else{
            console.log("Choose your player, Mario or Luigi.")
        }
    }
    gotHit(){
        //called whenever player is hit by enemy. Will set the status property "Powered Up" -> "Big" -> "Small" -> "Dead"
        if(this.statusIndex < 0 && this.hasStar > 0){
            console.log(`Your star protected you.`)
            this.statusIndex += 1
            this.hasStar = false
        }else if(this.statusIndex >= 2){
            this.statusIndex +=1
            this.gameActive = false
        }else{
            this.statusIndex += 1
        }
    }
    gotPowerUp(){
        if(this.statusIndex > 0){
            this.statusIndex -= 1
        }else if(this.statusIndex <= 0 && this.hasStar === false){
            this.statusIndex -= 1
            this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`\n`)
        console.log(`Name: ${this.name}`)
        if(this.statusIndex <= 0){
            console.log(`Status: Powered Up`)
        }else{
            console.log(`Status: ${this.status[this.statusIndex]}`)
        }
        console.log(`Total Coins: ${this.totalCoins}`)
        if(this.hasStar === true){
            console.log(`Congratulations you got a star!`)
        }
    }
}

//Setup game

const player1 = new Player()
player1.setName("Mario")

//Endgame function

let endgame = function(){
    if (player1.gameActive === false){
        console.log(`You lost!`)
        clearInterval(game)
    }
}

//Runs the Game
function runGame(){
        var randNum = Math.floor(Math.random()*3)
        if(randNum === 0){
            player1.gotHit()
        }else if(randNum === 1){
            player1.gotPowerUp()
        }else if (randNum === 2){
            player1.addCoin()
        }else{
            console.log("Functionality not programmed in yet")
        }
        player1.print()
        endgame()
}

//Call Game
let game = setInterval(runGame, 1000) 


///Write condition to clear out the star in inventory
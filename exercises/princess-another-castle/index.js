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
        this.name = ""; //string
        this.totalCoins = 0; //number
        this.status = [poweredUp.name, big.name, small.name, dead.name]
        this.statusIndex = 0;
        this.hasStar = 0;
        this.gameActive = true; //becomes false when "status" = "dead"
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
            this.statusIndex -= 1
        }else if(this.statusIndex === 2){
            this.statusIndex = 3
            console.log(`You Lost the game!`)
            this.gameActive = false
        }else{
            this.statusIndex += 1
        }
    }
    gotPowerUp(){
        if(this.statusIndex > 0){
            this.statusIndex -= 1
        }else if(this.statusIndex <= 0){
            this.statusIndex -= 1
            this.hasStar += 1
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
        if(this.hasStar > 0){
            console.log(`Congratulations you got a star!`)
        }
    }
}

function randRange(){
    return Math.floor(Math.random()*3)
}
//Runs the Game
function runGame(){
    while(player1.gameActive === true){
        player1.print()
        var randNum = randRange()
        if(randNum === 0){
            player1.gotHit()
        }else if(randNum === 1){
            player1.gotPowerUp()
        }else if (randNum === 2){
            player1.addCoin()
        }else{
            console.log("Functionality not programmed in yet")
        }
    }
}

//Setup game

const player1 = new Player()
player1.setName("Mario")

//Call Game

myGame = setInterval(runGame(), 1000)
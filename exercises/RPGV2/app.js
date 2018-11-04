var readline = require("readline-sync")
//////////////
var playerGame = false

var healthPotion = {
    name: "Health Potion",
    value: 25,
}

var attackPotion = {
    name: "Attack Potion",
    attackPower: 25,
}
var endGame = {
    name: "God Status",
    value: true
}

function Enemy(){
    names: ["Ghost", "Demon", "Dragon"]
}

var player1 = new Player()
function Player(name, hp, inventory){
    this.name = name
    this.hp = 500
    this.inventory = inventory
    this.attack1 = function(){
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
    this.attack2 = function(){
        if ((Math.floor(Math.random() * 10) >= 5)){
            return Math.floor(Math.random() * 100)
        }else{
            console.log("Oooooo... your attack missed.")
        }
    }
}

player1.name = readline.question(`Do you remember your name? What do you call yourself? `)
console.log(`\nExcellent, ${player1.name}, let's begin.\n`)


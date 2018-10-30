var ask = require("readline-sync")

//////////////////////
// Players and Enemies Constructors
function Player(name, hp){
    this.name = name
    this.hp = hp
    // attack for a random amount
    this.attack = function(){
        // returns a random number between 30 - 50
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
}

function Enemy(type, hp){
    this.type = type
    this.hp = hp
    // attack for a random amount
    this.attack  = function(){
        return Math.floor(Math.random() * (25 - 5) + 5)
    }
}
/////////////////////////

// Global Vars //
var player1 = new Player("Steve", 100)
var playerChoiceOptions = ["walk", "other stuff"]


// Game Functions //
function walk(){
    console.log("you walked!")
    // Generate Random number between 1 - 4
        // If attacked (1/4 chance), trigger attack function
            // attackSequence()
        // else, the user is taken back to initial question ( or anything else you'd like )
}


///////////////
// Game Loop //

console.log("Greetings Traveller!")
player1.name = ask.question("May I have your name? ")
console.log(`Thank you ${player1.name}, let's begin!`)

// End game conditions:
    // Player dies
    // Player wins (whatever that is)
    // Player has option to quit at anytime

    // While the player is alive
while(player1.hp > 0){
    // play the game
    var userChoice = ask.keyInSelect(playerChoiceOptions, "What would you like to do? ")
    // If the user choose to walk
    if(userChoice === 0){
        walk() 
    }
}




////////////////////////////////////////////////////
// You will have functions with loops inside of them
// Think, Do I need this action repeated?  Put it in a while loop
function attackSequence(){
    // var currentEnemy = new Enemy("orc", 200)
    while(player is alive && the enemy is alive){
        // player attacks enemy
        // enemy attacks player
    }
    // battleResolution() // give the player loot
}


////////////////////////////
// Simulated Battle Sequence
    // var orc = new Enemy("Orc", 30)
    // console.log(orc)

    // var pAttackAmount = player1.attack()
    // var oAttackAmount = orc.attack()

    // orc.hp -= pAttackAmount
    // console.log(`The player hit the ${orc.type} for ${pAttackAmount} hp!`)
    // player1.hp -= oAttackAmount
    // console.log(`The ${orc.type} hit the player for ${oAttackAmount} hp!`)


    // console.log(enemy2)



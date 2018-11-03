var readline = require("readline-sync")

////////////////////////
/// Player and Enemy Constructors

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

function Enemy(name, type, hp, inventory){
    this.name = name
    this.type = type
    this.hp = hp
    this.inventory = inventory
}

/////////////////////////
/// Global Variables

var player1 = new Player()
var playerChoiceOption1 = ["walk", "look around", "pick up item", "flee", "attack", "run", "look at inventory", "quit"]
var playerChoiceOption2 = ["walk", "look around","look at inventory", "quit"]
var playerChoiceOption3 = ["walk", "quit"]

var isDead = false
var hasWon = false
var inventoryCount = 0
var keyCount = 0
var walkCounter = 0

///////////////////////////
//// Game Functions
    //Attack chance 1/4
function randomNum1(){
    var rand = Math.floor(Math.random()*100)
    if (rand < 25){
        return "attacked"
    } else{
        return "safe"
    }
}
    //Attack chance 1/3
function randomNum1(){
    var rand = Math.floor(Math.random()*100)
    if (rand <= 33){
        return "attacked"
    } else{
        return "safe"
    }
}


function walk1(){
    console.log("You walked a bit")
}

function flee(){

}

function attackEnemy(){

}

function enemyAttack(){

}

function die(){
    player1.hp = 0;
    console.log(`You're dead ${player1}. You lose.`)
}

function enemyDie(){

}

function enemyCreation(){

}
////// Player Fighting Dynamics


////// Enemy Fighting Dynamics


///////////////////////////
/////// Game Loop ////////

/// Stages of main loops for each section

//Opening
console.log(`You wake up. It's early morning. Slowly your senses come to you and you become aware that you are lying down on a park bench in a picturesque park overlooking the city\n`)
console.log(`Looking around, you notice that it is eerily quiet and no one is around. No city sounds, no birds, no insects, even the air is still, only a slight ringing in your ear punctuates the silence. "What is going on?" You ask yourself.\n`)
console.log(`Suddenly, as if you feel a haptic pulse in your left palm and you jolt upright\n`)
console.log(`Intuitively, you use your thumb to tap your palm, and a holographic screen appears in your vision...\n`)
console.log(`"Greetings traveller, welcome back." prints in your display and a sense of unadultured excitement begins to creep in. You know this feeling, you let it happen. Something feels familiar here.\n`)

//Greeting
console.log(`The holoscreen prompts you: \n`)
player1.name = readline.question(`Do you remember your name? What do you call yourself? `)
console.log(`\nExcellent, ${player1.name}, let's begin.\n`)
var opening = readline.keyIn(`We've got a long way to walk, press "w" to get started walking, press "i" to check your inventory, or "q" to quit. `, {limit: ['w','q', 'i']})
//Insert option to skip ahead if user remembers the stage
part1()
//Part 1 (5 + 1 walks)/////////
function part1(){
    while(player1.hp > 0 && walkCounter < 5){
        //var answer1 = readline.keyIn(`We've got a long way to walk, press "w" to get started or "q" to quit. `, {limit: 'wq'})
            switch(opening){
                case "w":
                    walk1();
                    walkCounter += 1;
                    var choice1a = readline.keyIn(`You're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})
                    break;
                case "q":
                    console.log(`Well that's dumb, you're a quitter ${player1.name}.`);
                    player1.hp = 0;
                    break;
                case "i":
                    console.log(`You don't have anything in your inventory yet`);
                    var choice1b = readline.keyIn(`Press "w" to walk, or "q" to quit.`, {limit: ['w','q']})
                    break;
            }
            
            switch(choice1a){
                case "w":
                    walk1();
                    walkCounter += 1;
                    var choice2a = readline.keyIn(`You're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})
            }

            switch(choice1b){
                case "w":
                walk1();
                walkCounter += 1;
                var choice1a = readline.keyIn(`You're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})


                case "q":
            }
    }
}

// var p1q1 = readline.question(`\nWe need to get to the city-center, but it is a bit of a walk. Are you ready ${player1.name}? `)

//if yes, auto walk to edge of park, sense danger lurking

//give options, next walk --> start enemy chance of appearing 1/4 chance, enemies only of weaker variety

//while part 1, every few walks = slightly different scene, introduce events that make you remember what you're doing

//Part 1 ends with one piece of the puzzle being acquired, knowledge or physical location is now the edge of the city

//Part 2 (5 walks)//////////

//give options of two different paths through the city (only work on one right now)

//path 1 (gives 1/3 chance of enemy encounter)
//path 2 (gives 1/2 chance of enemy encounter)
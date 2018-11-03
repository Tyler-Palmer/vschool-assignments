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
var enemy = new Enemy("Gh",50, "Coin")
function Enemy(type, hp, inventory, attack){
    this.type = type
    this.hp = hp
    this.inventory = inventory
    this.attack = function(){
        return Math.floor(Math.random() * (30 - 10) + 10)
    }
    this.isDead = false
}

/////////////////////////
/// Global Variables

var player1 = new Player()
var playerChoiceOption1 = ["walk", "look around", "pick up item", "flee", "attack", "run", "look at inventory", "quit"]
var playerChoiceOption2 = ["walk", "look around","look at inventory", "quit"]
var playerChoiceOption3 = ["walk", "quit"]

var enemyIsDead = false
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
        return true
    } else{
        return false
    }
}
    //Attack chance 1/3
function randomNum2(){
    var rand = Math.floor(Math.random()*100)
    if (rand <= 33){
        return true
    } else{
        return false
    }
}


function walk1(){
    var attackChance = randomNum1()
    if (attackChance === true){
        console.log(`\nYou walk along the path and an enemy appears!\n`)
        enemyCreation1()
        attackSequence1()
    } else{
        console.log(`\n\nWhile walking you notice something seems to be lurking in the shadows but you're safe for now.`)
    }
}

function flee(){
    var fleeChance = Math.floor(Math.random()* 2)
    if (fleeChance === 1){
        console.log(`You successfully escaped from the ${enemy.name}.`)
        walk1()
    }else{
        console.log(`You weren't able to escape.`)
        enemyAttack()
    }
}

function attackEnemy(){
    var pAttackAmount = player1.attack1()
    enemy.hp -= pAttackAmount
    console.log(`${player1.name} hit the ${enemy.type} for ${pAttackAmount} damage. It's remaining hp is: ${enemy.hp}`)
}

function enemyAttack(){
    var eAttackAmount = enemy.attack()   
    player1.hp -= eAttackAmount
    console.log(`The ${enemy.type} hit you for ${eAttackAmount} damage. Your remaining hp is: ${player1.hp}`)
}

function attackSequence1(){
    enemyCreation1()
    var attackSequenceOptions = readline.keyIn(`Alright ${player1.name}, you can press "a" to attack the enemy, or "r" to run away. What do you want to do? `, {limit: ['a','r']})
    while(enemy.hp > 0 || player1.hp > 0){
        switch(attackSequenceOptions){
            case "a":
            attackEnemy();
            enemyAttack();
            var attackSequenceOptions2 = readline.keyIn(`\n\n Press "a" to keep attacking or "r" to attempt to run away. `)
            break;

            case "r":
            flee();
            break;
        }
        switch(attackSequenceOptions2){
            case "a":
                if(!enemyIsDead){
                    enemyIsDead = true;
                    console.log(`You killed the ${enemy.type}.\n`)
                    walk1()
                    break;
                }else{
                    attackEnemy();
                    enemyAttack();
                    attackSequenceOptions2
                }
        }
    }

}

function die(){
    player1.hp = 0;
    console.log(`You're dead ${player1}. You lose.`)
}

function enemyDie(){

}

function enemyCreation1(){
    var enemy = new Enemy("Ghost",50, "Coin")
    return enemy
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
    if (walkCounter < 5 && !isDead){
        while(!isDead && walkCounter < 5){
            //var answer1 = readline.keyIn(`We've got a long way to walk, press "w" to get started or "q" to quit. `, {limit: 'wq'})
                switch(opening){
                    case "w":
                        walk1();
                        walkCounter += 1;
                        console.log(`\nNumber of walks: ${walkCounter}`)
                        var choice1a = readline.keyIn(`You're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})
                        break;
                        
                    case "q":
                        console.log(`\n\nWell that's dumb, you're a quitter ${player1.name}.`);
                        isDead = true;
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
                        console.log(`\n\nNumber of walks: ${walkCounter}`)
                        var choice2a = readline.keyIn(`\n\nYou're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})
                        break;
                    
                    case"q":
                        console.log(`\n\nWell that's dumb, you're a quitter ${player1.name}.`);
                        isDead = true;
                        break;
                }

                switch(choice1b){
                    case "w":
                        walk1();
                        walkCounter += 1;
                        var choice1a = readline.keyIn(`\n\nYou're getting closer! \n\n Press "w" to get started walking, press "i" to check your inventory, or "q" to quit.`, {limit: ['w','i','q']})


                    case "q":
                    console.log(`\n\nWell that's dumb, you're a quitter ${player1.name}.`);
                    isDead = true;
                    break;
                }
        }
    }else{
        isDead = true
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
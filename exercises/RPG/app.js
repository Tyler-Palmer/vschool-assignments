var ask = require("readline-sync")

////////////////////////
/// Player and Enemy Constructors

function Player(name, hp){
    this.name = name
    this.hp = 
}

function Enemy(type, hp){

}

/////////////////////////
/// Global Variables

var player1 = new Player()
var playerChoiceOptions1 = ["walk", "look around", "pick up item", "call for help", "attack", "run", "look at inventory", "quit"]
var playerChoiceOption2 = ["walk", "look around","look at inventory", "quit"]

var isDead = false
var hasWon = false
var 

///////////////////////////
//// Game Functions

function walk(){

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
console.log(`The holoscreen prompts you:\n`)
player1.name = ask.question(`Do you remember your name? What do you call yourself?`)
console.log(`\nExcellent, ${player1.name}, let's begin.`)

//Insert option to skip ahead if user remembers the stage

//Part 1 (5 + 1 walks)/////////

var p1q1 = ask.question(`\nWe need to get to the city-center, but it is a bit of a walk. Are you ready ${player1.name}? `)

//if yes, auto walk to edge of park, sense danger lurking

//give options, next walk --> start enemy chance of appearing 1/4 chance, enemies only of weaker variety

//while part 1, every few walks = slightly different scene, introduce events that make you remember what you're doing

//Part 1 ends with one piece of the puzzle being acquired, knowledge or physical location is now the edge of the city

//Part 2 (10 walks)//////////

//give options of two diffe





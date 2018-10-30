var ask = require("readline-sync")

////////////////////////
/// Player and Enemie Constructors

function Player(name, hp){

}

function Enemy(type, hp){

}

/////////////////////////
/// Global Variables

var player1 = new Player()
var playerChoiceOptions1 = ["walk", "look around", "pick up item", "yell for help", "attack", "run", "look at inventory", "quit"]

///////////////////////////
//// Game Functions

function walk(){

}

///////////////////////////
/////// Game Loop ////////

//Opening
console.log(`You wake up. It's early morning. Slowly your senses come to you and you become aware that you are lying down on a park bench in a picturesque park overlooking the city\n`)
console.log(`Looking around, you notice that it is eerily quiet and no one is around. No city sounds, no birds, no insects, even the air is still, only a slight ringing in your ear punctuates the silence. "What is going on?" You ask yourself.\n`)
console.log(`Suddenly, as if  you feel a haptic pulse in your left palm and you jolt upright\n`)
console.log(`Intuitively, you use your thumb to tap your palm, and a holographic screen appears in your vision...\n`)
console.log(`"Greetings traveller, welcome back." prints in your display and a sense of unadultured excitement begins to creep in. You know this feeling, you let it happen. Something feels familiar here.\n`)

//Greeting
console.log(`The holoscreen prompts you:\n`)
player1.name = ask.question(`Do you remember your name? What do you call yourself?`)
console.log(`\nExcellent, ${player1.name}, let's begin.`)

//Insert option to skip ahead if user remembers the stage

//Part 1

var p1q1 = ask.question(`\nWe need to get to the city-center, but it is a bit of a walk. Are you ready ${player1.name}? `)


